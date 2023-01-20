import { agent } from 'supertest';

import { App } from '../src/app.mjs';

class HttpRequest {
  constructor() {
    this.app = new App();
  }

  async start() {
    this.server = await this.app.listen();
    this.requestWithSupertest = agent(this.server);
  }

  async close() {
    this.server?.close();
    this.server = undefined;
    this.requestWithSupertest = undefined;
  }

  getRequest() {
    return {
      post: this.hook('post'),
      get: this.hook('get'),
      put: this.hook('put'),
      patch: this.hook('patch'),
      delete: this.hook('delete'),
    };
  }

  hook(method) {
    return (args) => {
      const req = this.requestWithSupertest?.[method](args.url);

      if (args.token) {
        req.set('Authorization', `Bearer ${args.token}`);
      }

      return req;
    };
  }
}

export const instance = new HttpRequest();

export const request = instance.getRequest();
