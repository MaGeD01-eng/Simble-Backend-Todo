const express = require('express');
const cors = require('cors');
const connectDb = require('./config/Db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
connectDb();
let todos = [];

// get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// add todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.json(newTodo);
});

// delete todo
app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: 'deleted' });
});

// toggle complete
app.put('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  res.json({ message: 'updated' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});