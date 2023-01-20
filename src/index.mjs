import 'dotenv/config';

import { App } from './app.mjs';

const terminate = (server) => {
  return (code, message) => (err, promise) => {
    if (err) {
      console.log('🚀 ~ file: index.mjs:8 ~ return ~ err', err);
    }

    server.close((error) => {
      if (error) {
        console.log('🚀 ~ file: index.mjs:13 ~ return ~ error', error);
      }
      process.exit(code);
    });
  };
};

const main = async () => {
  const server = new App().listen();
  const exitHandler = terminate(server);

  process.on('uncaughtException', exitHandler(1, 'Uncaught Error'));
  process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'));
  process.on('SIGTERM', exitHandler(0, 'SIGTERM'));
  process.on('SIGINT', exitHandler(0, 'SIGINT'));
};

main();
