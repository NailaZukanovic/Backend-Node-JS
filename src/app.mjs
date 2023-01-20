import express from 'express';
import cors from 'cors';

import { Routes } from './routes/index.mjs';
import { errorHandle } from './middleware/error.middleware.mjs';

export class App {
  constructor() {
    this._app = express();
    this.port = +process.env.PORT || 5000;
    this.listen = this.listen.bind(this);
  }

  listen() {
    this.#setup();
    return this._app.listen(this.port, () =>
      console.log('Server is running on port 5000')
    );
  }

  #setup() {
    this._app.set('trust proxy', true);
    this._app.use(cors());

    this._app.use(new Routes().routes);

    this._app.use(errorHandle);
  }
}
