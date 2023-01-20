import { errorHandle } from '../../src/middleware/error.middleware.mjs';
import { Forbidden } from '../../src/utils/exceptions/forbidden.exception.mjs';
import { mockResponse } from '../common.mjs';

describe('testing error handler', () => {
  it('should return server error', async () => {
    const rsp = errorHandle(new Error(), {}, mockResponse(), jest.fn());
    expect(rsp).toBeTruthy();
  });

  it('should return forbidden error', async () => {
    const rsp = errorHandle(new Forbidden(), {}, mockResponse(), jest.fn());
    expect(rsp).toBeTruthy();
  });
});
