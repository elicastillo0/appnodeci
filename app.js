const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello, World!'
  });
});

// Activando workflow tras regenerar dependencias
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
