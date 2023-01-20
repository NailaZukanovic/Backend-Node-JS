import { Router } from 'express';

import { AdminRoutes } from './admin.route.mjs';
import { AuthRoutes } from './auth.route.mjs';

export class Routes {
  constructor() {
    this.router = Router();
  }

  get routes() {
    this.router.use([new AuthRoutes().routes, new AdminRoutes().routes]);

    return this.router;
  }
}
