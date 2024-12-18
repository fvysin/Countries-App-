// const axios = require("axios");
// //extra modularization so that an infinite loop is not generated with the tests
// const server = require("./src/server");
// //database connection
// const { conn } = require("./src/db.js");
// const PORT = 3001;
// //database connection sync
// conn
//   .sync({ 
//     // force: true 
//     force:false
//   })
//   .then(() => {
//     //listen
//     server.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`);
//     });
//   })
//   .catch((error) => console.error(error));
// // 

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el servidor backend' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
