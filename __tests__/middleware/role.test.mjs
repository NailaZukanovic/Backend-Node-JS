import { mockResponse, nextFunction } from '../common.mjs';
import { HttpStatusCode } from '../../src/utils/http-status.mjs';
import { roleMiddleware } from '../../src/middleware/role.middleware.mjs';

describe('testing role middleware', () => {
  it('should fail with ADMIN role and different ip', async () => {
    const rsp = await roleMiddleware(
      {
        ip: '1',
        user: { role: 'ADMIN' },
      },
      mockResponse(),
      nextFunction
    );
    expect(rsp.status).toEqual(HttpStatusCode.FORBIDDEN);
  });

  it('should pass with ADMIN', async () => {
    const rsp = await roleMiddleware(
      {
        ip: '100.100.100.100',
        user: { role: 'ADMIN' },
      },
      mockResponse(),
      nextFunction
    );
    expect(rsp).toEqual(undefined);
  });

  it('should pass with SUPER_ADMIN', async () => {
    const rsp = await roleMiddleware(
      {
        ip: '100.100.100.1',
        user: { role: 'SUPER_ADMIN' },
      },
      mockResponse(),
      nextFunction
    );
    expect(rsp).toEqual(undefined);
  });
});
