import { Router } from 'express';

import { Auth } from '../controllers/auth.controller.mjs';

export class AuthRoutes {
  constructor() {
    this.router = Router();
    this.controller = new Auth();
  }

  get routes() {
    this.router.post(
      '/auth/admin',
      this.controller.loginAsAdmin
    );

    this.router.post(
      '/auth/super-admin',
      this.controller.loginAsSuperAdmin
    );

    return this.router;
  }
}
