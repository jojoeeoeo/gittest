const request = require('supertest');
const app = require('./app');

describe('App', () => {
  test('GET / should return HELLO WORLD', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('HELLO WORLD');
  });
});