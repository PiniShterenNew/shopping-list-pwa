import request from 'supertest';
import app from '../src/server';

describe('auth integration', () => {
  it('registers and logs in a user', async () => {
    const email = 'test@example.com';
    const password = 'password';
    const register = await request(app)
      .post('/api/auth/register')
      .send({ email, password });
    expect(register.status).toBe(200);
    expect(register.body.token).toBeDefined();

    const login = await request(app)
      .post('/api/auth/login')
      .send({ email, password });
    expect(login.status).toBe(200);
    expect(login.body.token).toBeDefined();
  });
});
