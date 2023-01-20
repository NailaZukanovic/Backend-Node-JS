import { HttpStatusCode } from '../http-status.mjs';
import { HttpException } from './http.exception.mjs';

export class Unauthorized extends HttpException {
  constructor(data) {
    super(HttpException.createBody(data), HttpStatusCode.UNAUTHORIZED);
  }
}
