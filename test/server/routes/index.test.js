import request from 'supertest'
import app from '~/src/server/app'

describe('#routes #index', () => {
  describe('GET /', () => {
    it('should render text === Invalid Endpoint', async () => {
      const res = await request(app).get('/')
      expect(res.text).toEqual('Invalid Endpoint')
    })
  })
})