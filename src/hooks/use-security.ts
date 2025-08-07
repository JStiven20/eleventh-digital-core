import { useState, useCallback } from 'react';

interface SecurityValidation {
  isValid: boolean;
  errors: string[];
}

export const useSecurity = () => {
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 5;

  // Sanitizar strings para prevenir XSS
  const sanitizeString = useCallback((input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }, []);

  // Validar email con regex estricto
  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254;
  }, []);

  // Validar nombre (solo letras, espacios y acentos)
  const validateName = useCallback((name: string): boolean => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{2,50}$/;
    return nameRegex.test(name);
  }, []);

  // Validar mensaje (longitud y contenido básico)
  const validateMessage = useCallback((message: string): boolean => {
    return message.length >= 10 && message.length <= 1000;
  }, []);

  // Validación completa del formulario
  const validateContactForm = useCallback((data: {
    name: string;
    email: string;
    message: string;
  }): SecurityValidation => {
    const errors: string[] = [];

    // Sanitizar inputs
    const sanitizedData = {
      name: sanitizeString(data.name),
      email: sanitizeString(data.email),
      message: sanitizeString(data.message)
    };

    // Verificar rate limiting
    if (attempts >= maxAttempts) {
      errors.push('Demasiados intentos. Por favor, intenta más tarde.');
      return { isValid: false, errors };
    }

    // Validar nombre
    if (!validateName(sanitizedData.name)) {
      errors.push('El nombre debe contener solo letras y tener entre 2-50 caracteres.');
    }

    // Validar email
    if (!validateEmail(sanitizedData.email)) {
      errors.push('Por favor ingresa un email válido.');
    }

    // Validar mensaje
    if (!validateMessage(sanitizedData.message)) {
      errors.push('El mensaje debe tener entre 10 y 1000 caracteres.');
    }

    // Detectar posibles ataques
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /vbscript:/i,
      /onload=/i,
      /onclick=/i,
      /onerror=/i
    ];

    const allText = `${sanitizedData.name} ${sanitizedData.email} ${sanitizedData.message}`;
    const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(allText));

    if (hasSuspiciousContent) {
      errors.push('El contenido del formulario contiene caracteres no válidos.');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }, [attempts, maxAttempts, sanitizeString, validateEmail, validateName, validateMessage]);

  // Incrementar contador de intentos
  const recordAttempt = useCallback(() => {
    setAttempts(prev => prev + 1);
  }, []);

  // Resetear contador de intentos
  const resetAttempts = useCallback(() => {
    setAttempts(0);
  }, []);

  // Generar token CSRF simple (en producción usar una solución más robusta)
  const generateCSRFToken = useCallback((): string => {
    return btoa(Date.now().toString() + Math.random().toString()).slice(0, 32);
  }, []);

  return {
    validateContactForm,
    recordAttempt,
    resetAttempts,
    generateCSRFToken,
    sanitizeString,
    isBlocked: attempts >= maxAttempts,
    attemptsRemaining: Math.max(0, maxAttempts - attempts)
  };
};