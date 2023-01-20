import { Forbidden } from '../src/utils/exceptions/forbidden.exception.mjs';
import { InternalServerError } from '../src/utils/exceptions/internal-server-error.exception.mjs';
import { Unauthorized } from '../src/utils/exceptions/unauthorized.exception.mjs';

describe('testing custom errors', () => {
  it('forbidden error', async () => {
    const forbidden = new Forbidden();
    expect(forbidden.message).toEqual('Forbidden');
  });

  it('unauthorized error', async () => {
    const unauthorized = new Unauthorized();
    expect(unauthorized.message).toEqual('Unauthorized');
  });

  it('serverError error', async () => {
    const serverError = new InternalServerError();
    expect(serverError.message).toEqual('Internal Server Error');
  });
});
