// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: '¡Hola universo!' });
});

module.exports = app;