import { HttpStatusCode } from '../http-status.mjs';
import { HttpException } from './http.exception.mjs';

export class InternalServerError extends HttpException {
  constructor(data) {
    super(HttpException.createBody(data), HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
}
