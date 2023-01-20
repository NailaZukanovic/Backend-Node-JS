import { Admin } from '../../src/controllers/admin.controller.mjs';
import { HttpStatusCode } from '../../src/utils/http-status.mjs';
import { mockResponse } from '../common.mjs';

const controller = new Admin();

describe('testing admin controller', () => {
  it('should get response', async () => {
    const rsp = controller.rsp({}, mockResponse());
    expect(rsp.statusCode).toEqual(HttpStatusCode.OK);
  });
});
