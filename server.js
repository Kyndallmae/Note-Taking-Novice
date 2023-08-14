const express = require('express');
const termData = require('./db/db.json');
const PORT = 3001;
const app = express();
const html = require('./public');
html();

app.get('/api', (req, res) => {
    res.json(termData);
  })

app.get('./api/notes', (req, res) => {
    res.json(termData);
  })

app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

app.post('./api/notes', (req, res) => {
  res.json(termData);
  
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
