import { JWT } from '../../src/lib/jwt.lib.mjs';
import { authMiddleware } from '../../src/middleware/auth.middleware.mjs';
import { mockResponse, nextFunction } from '../common.mjs';
import { HttpStatusCode } from '../../src/utils/http-status.mjs';

const jwt = new JWT();

const token = jwt.signToken({ id: 1, role: 'ADMIN' });
const expiredToken =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NzQxNDcyNzAsImV4cCI6MTY3NDE0ODE3MCwiaXNzIjoidXNlciIsInN1YiI6ImFwcGxpY2F0aW9uIHRva2VuIn0.t8gxXnCbNdXH_uw-xBTzoW9EXBux0Nur6NVTG2P2YcEgk35f_cc0I1yd7ErswmjMaZET1uUnovlRkoIEEhFD-Q';

describe('testing auth middleware', () => {
  it('should fail to pass without token', async () => {
    const rsp = await authMiddleware(
      { headers: {} },
      mockResponse(),
      nextFunction
    );
    expect(rsp.status).toEqual(HttpStatusCode.UNAUTHORIZED);
  });

  it('should fail with expired token', async () => {
    const rsp = await authMiddleware(
      { headers: { authorization: `Bearer ${expiredToken}` } },
      mockResponse(),
      nextFunction
    );
    expect(rsp.status).toEqual(HttpStatusCode.UNAUTHORIZED);
  });

  it('should pass', async () => {
    const rsp = await authMiddleware(
      { headers: { authorization: `Bearer ${token}` } },
      mockResponse(),
      nextFunction
    );
    expect(rsp).toEqual(undefined);
  });
});
