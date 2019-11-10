const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { getId } = require('./utils');
let { users } = require('./data');

const app = express();

app.use(bodyParser.json());
app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/newuser', (req, res) => {
  const user = req.body;
  user.id = getId();
  users.push(user);
  res.send(user);
});

app.put('/changeuser', (req, res) => {
  const { id } = req.body;
  const userIndex = users.findIndex(item => item.id === id);
  if (userIndex === -1) {
    res.sendStatus(400);
    return;
  }
  Object.keys(req.body).forEach(key => {
    if (key !== 'id') users[userIndex][key] = req.body[key];
  });
  res.send({ index: userIndex, user: users[userIndex] });
});

app.delete('/deleteuser', (req, res) => {
  const { id } = req.query;
  users = users.filter(item => item.id !== id);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));
