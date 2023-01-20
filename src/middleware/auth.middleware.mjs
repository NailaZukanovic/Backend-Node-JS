import { JWT } from '../lib/jwt.lib.mjs';
import { Unauthorized } from '../utils/exceptions/unauthorized.exception.mjs';

const jwt = new JWT();

export const authMiddleware = async (req, _, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  try {
    if (!token) throw Error('Token not provided');

    const user = jwt.verifyToken(token);

    req.user = user;

    return next();
  } catch (err) {
    return next(new Unauthorized());
  }
};
