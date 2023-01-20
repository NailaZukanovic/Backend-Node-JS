import { HttpException } from '../utils/exceptions/http.exception.mjs';
import { InternalServerError } from '../utils/exceptions/internal-server-error.exception.mjs';

const captureException = (httpException, error, req) => {
  const { status, meta, ...rest } = httpException.getResponse();

  return httpException.getResponse();
};

export const errorHandle = (error, req, res, __) => {
  if (error instanceof HttpException) {
    const { status, meta, ...rest } = captureException(error, error, req);
    return res.status(status).json({ ...rest, ...meta });
  }

  const { status, meta, ...rest } = captureException(
    new InternalServerError(),
    error,
    req
  );

  return res.status(status).json({ ...rest, ...meta });
};
