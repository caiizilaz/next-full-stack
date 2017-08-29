import express from 'express'
// import index from './routes/index'
import todos from './routes/todos.js'

const app = express()

// app.use('/', index)
app.use('/api', todos)

export default app