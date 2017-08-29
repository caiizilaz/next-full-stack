import request from 'supertest'
import app from '~/src/server/app'

describe('#routes #todos', () => {
  describe('GET /api/todos', () => {
    it('should render text === GET todos', async () => {
      const res = await request(app).get('/api/todos')
      expect(res.text).toEqual('GET todos')
    })
  })
})