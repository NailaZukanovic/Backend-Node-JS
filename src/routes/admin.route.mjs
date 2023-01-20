import { Router } from 'express';

import { Admin } from '../controllers/admin.controller.mjs';
import { authMiddleware } from '../middleware/auth.middleware.mjs';
import { roleMiddleware } from '../middleware/role.middleware.mjs';

export class AdminRoutes {
  constructor() {
    this.router = Router();
    this.controller = new Admin();
  }

  get routes() {
    this.router.use(authMiddleware, roleMiddleware);

    this.router.get('/admin/users', this.controller.rsp);

    this.router.get('/admin/settings', this.controller.rsp);

    return this.router;
  }
}
