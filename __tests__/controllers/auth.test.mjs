import { Auth } from '../../src/controllers/auth.controller.mjs';
import { HttpStatusCode } from '../../src/utils/http-status.mjs';
import { mockResponse } from '../common.mjs';

const controller = new Auth();

describe('testing auth controller', () => {
  it('should login as admin', async () => {
    const rsp = controller.loginAsAdmin({}, mockResponse());
    expect(rsp.statusCode).toEqual(HttpStatusCode.OK);
  });

  it('should login as super admin', async () => {
    const rsp = controller.loginAsSuperAdmin({}, mockResponse());
    expect(rsp.statusCode).toEqual(HttpStatusCode.OK);
  });
});
