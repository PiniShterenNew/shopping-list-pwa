import bcrypt from 'bcrypt';

describe('password hashing', () => {
  it('hashes and verifies password', async () => {
    const password = 'secret';
    const hashed = await bcrypt.hash(password, 10);
    const match = await bcrypt.compare(password, hashed);
    expect(match).toBe(true);
  });
});
