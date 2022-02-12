const express = require('express');
const path = require('path');

const app = express();
const port = 4000;
app.use(express.static('client/dist'));
app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Connected on http://localhost:${port}`);
});
