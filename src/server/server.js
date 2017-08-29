import app from './app'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const port = 3003

nextApp.prepare()
  .then(() => {
    app.get('/p/:id', (req, res) => {
      const actualPage = '/'
      const queryParams = { id: req.params.id }
      nextApp.render(req, res, actualPage, queryParams)
    })

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    app.listen(port, () => {
      console.log(`server listening on port ${port}`)
    })

  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })