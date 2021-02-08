require('dotenv').config();

const express = require('express');
const app = express();

const { HOST, PORT, NODE_ENV } = process.env;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, HOST, () => {
  console.log(`Enviroment: ${NODE_ENV}`);
  console.log(`Server on http://${HOST}:${PORT}`);
});
