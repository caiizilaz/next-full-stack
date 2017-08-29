import express from 'express'

const todos = express.Router()

todos.get('/todos', (req, res) => {
  res.send('GET todos');
})

export default todos