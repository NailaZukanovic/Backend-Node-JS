import { HttpStatusCode } from '../../src/utils/http-status.mjs';
import { instance, request } from '../supertestRequest.mjs';

describe('testing routes', () => {
  beforeAll(async () => {
    await instance.start();
  });

  afterAll(async () => {
    await instance.close();
  });

  it('should login as admin', async () => {
    const rsp = await request.post({ url: '/auth/admin' }).send();
    expect(rsp.status).toEqual(HttpStatusCode.OK);
  });
});
