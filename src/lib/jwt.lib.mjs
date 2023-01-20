import jwt from 'jsonwebtoken';

export class JWT {
    signToken(data) {
      return jwt.sign(
        data,
        process.env.TOKEN_SECRET_KEY,
        {
            expiresIn: process.env.TOKEN_EXP_TIME,
            algorithm: 'HS512',
            mutatePayload: false,
            issuer: 'user',
            subject: 'application token',
          }
      );
    }

    verifyToken(token, refresh = false) {
      try {
        return jwt.verify(
          token,
          process.env.TOKEN_SECRET_KEY,
          {
            expiresIn: process.env.TOKEN_EXP_TIME,
            algorithm: 'HS512',
            mutatePayload: false,
            issuer: 'user',
            subject: 'application token',
          }
        );
      } catch {
        throw new Unauthorized({ message: 'Token verification failed' });
      }
    }

    decodeToken(token) {
      return jwt.decode(token);
    }
  }
