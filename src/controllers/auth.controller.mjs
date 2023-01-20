import { JWT } from '../lib/jwt.lib.mjs';
import { HttpStatusCode } from '../utils/http-status.mjs';

export class Auth {
  constructor() {
    this.jwt = new JWT();
    this.loginAsAdmin = this.loginAsAdmin.bind(this);
    this.loginAsSuperAdmin = this.loginAsSuperAdmin.bind(this);
  }

  loginAsAdmin(_, res) {
    const token = this.jwt.signToken({ role: 'ADMIN' });

    return res.status(HttpStatusCode.OK).json({ token });
  }

  loginAsSuperAdmin(_, res) {
    const token = this.jwt.signToken({ role: 'SUPER_ADMIN' });
    return res.status(HttpStatusCode.OK).json({ token });
  }
}
