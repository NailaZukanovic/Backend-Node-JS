import { JWT } from '../lib/jwt.lib.mjs';
import { HttpStatusCode } from '../utils/http-status.mjs';

export class Admin {
  constructor() {
    this.jwt = new JWT();
    this.rsp = this.rsp.bind(this);
  }

  rsp(_, res) {
    return res.status(HttpStatusCode.OK).json({ message: 'ok' });
  }
}
