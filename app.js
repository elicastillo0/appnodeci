// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: '🚀 ¡Deploy exitoso en Heroku con GitHub Actions!' });
});

module.exports = app;
