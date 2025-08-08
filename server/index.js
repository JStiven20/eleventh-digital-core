// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./db'); // <- usamos el pool exportado desde db.js


const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Ruta raíz opcional
app.get('/', (_req, res) => res.json({ ok: true, message: 'API funcionando' }));

// Healthcheck
app.get('/health', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS ok');
    res.json({ ok: true, db: rows[0].ok === 1 });
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message || e });
  }
});

// Insert de contacto
app.post('/api/contacto', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: 'Faltan campos' });
    }

    // Si tu tabla se llama `mensajes_contacto`, cambia 'contacto' -> 'mensajes_contacto'
    await pool.query(
      'INSERT INTO contacto (nombre, email, mensaje) VALUES (?, ?, ?)',
      [nombre, email, mensaje]
    );

    res.status(200).json({ message: '✅ Mensaje guardado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err?.sqlMessage || err?.message || String(err) });
  }
});

// (Opcional) listar últimos 50 para debug
app.get('/api/contacto', async (_req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, nombre, email, mensaje, created_at AS fecha_envio FROM contacto ORDER BY id DESC LIMIT 50'
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e?.sqlMessage || e?.message || String(e) });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
