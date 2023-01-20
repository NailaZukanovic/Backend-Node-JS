import { JWT } from '../../src/lib/jwt.lib.mjs';

const jwt = new JWT();

describe('testing jwt', () => {
  let token;

  beforeAll(() => {
    token = jwt.signToken({ id: 1, role: 'ADMIN' });
  });

  it('should sign token', () => {
    expect(token).toBeDefined();
  });

  it('should decode token', () => {
    const decoded = jwt.decodeToken(token);
    expect(decoded).toBeDefined();
    expect(decoded.id).toEqual(1);
  });

  it('should verify token', () => {
    const decoded = jwt.verifyToken(token);
    expect(decoded).toBeDefined();
    expect(decoded.id).toEqual(1);
  });

  it('should fail with invalid token', () => {
    expect(() => jwt.verifyToken('invalid')).toThrow();
  });
});
