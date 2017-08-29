import express from 'express'

const index = express.Router()

index.get('/', (req, res) => {
  res.send('Invalid Endpoint');
})

export default index