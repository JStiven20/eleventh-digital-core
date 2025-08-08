const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('❌ Error al conectar a MySQL:', err);
  } else {
    console.log('✅ Conexión a MySQL exitosa');
  }
});

app.post('/api/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  const query = 'INSERT INTO contacto (nombre, email, mensaje) VALUES (?, ?, ?)';
  db.query(query, [nombre, email, mensaje], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: '✅ Mensaje guardado correctamente' });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
