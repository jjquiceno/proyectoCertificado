const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'commentsfull',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 🤓 ❤️ Código ♠️ Unitario / integración 🍀 Postman / ThunderClient 💎 / Front
// 🤓 ❤️ ♠️ 🍀 💎  // new
app.get('/', async (req, res) => {
    res.json({ "ms": "Hola Mundo" });
});

// 🤓 ❤️ ♠️ 🍀 💎 // new
// Obtener todos los usuarios
app.get('/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🤓 ❤️ ♠️ 🍀 💎 // new
app.get('/usersfilter', async (req, res) => {
    const { name, email } = req.query; // path query
    try {
        let query = 'SELECT * FROM users';
        console.log(email, name);
        if (name != null && email != null) {
            query += ` WHERE name LIKE '%${name}%' AND email = '${email}'`;
        } else {
            res.status(401).json({ error: error.message });
        }
        const [rows] = await pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// 🤓 ❤️ ♠️ 🍀 💎 // new
// Obtener usuario por id
app.get('/users/:id', async (req, res) => {
    const id = req.params.id; // path params
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ message: 'User not found' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🤓 ❤️ ♠️ 🍀  // new
// Crear usuario
app.post('/users', async (req, res) => {
  const { name, email, password} = req.body;
  try {
    const [result] = await pool.query('INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    res.status(201).json({ id: result.insertId, name, email, password});
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ message: 'El email ya está registrado' });
    } else {
      res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
  }
});

//Logear usuario
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Email no encontrado' });
    }

    const usuario = rows[0];

    if (usuario.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      user: {
        id: usuario.id,
        name: usuario.name,
        email: usuario.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
});

// 🤓 ❤️ ♠️ 🍀  // new
// Actualizar usuario
app.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  try {
    const [result] = await pool.query('UPDATE usuarios SET name = ?, email = ? password = ? WHERE id = ?', [name, email, password, id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.json({ id, name, email, password });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.patch('/users/:id', async (req, res) => {
  const id = req.params.id;
  const { email } = req.body;
  try {
    const [result] = await pool.query('UPDATE users SET email = ? WHERE id = ?', [email, id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.json({ id, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 🤓 ❤️ ♠️ 🍀 // new
// Eliminar usuario
app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // para testing

