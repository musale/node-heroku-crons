import server from './server';
import { ifError } from 'assert';
import log from './tools/logging';

const PORT: number = 8080;
const HOST: string = '0.0.0.0';

server.listen(PORT, HOST, err => {
  ifError(err);
  log.info(
    `Started ${process.env.NODE_ENV} server on port http://${HOST}:${PORT}`
  );
});
