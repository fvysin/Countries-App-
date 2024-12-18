// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from the backend API!');
// });

// module.exports = app;

const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint básico
app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola desde la API de Vercel!' });
});

// Exporta la app
module.exports = app;
