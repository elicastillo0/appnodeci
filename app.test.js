// app.test.js
const request = require('supertest');
const app = require('./app');

describe('test endpoint /', () => {
  test('should return success message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('🚀 ¡Deploy exitoso en Heroku con GitHub Actions!');
  });
});
