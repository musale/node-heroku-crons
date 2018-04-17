import server from './server';
import { ifError } from 'assert';

const PORT: number = settings.port;
const HOST: string = '0.0.0.0';

server.listen(PORT, HOST, err => {
  ifError(err);
  log.info(
    `Started ${settings.NODE_ENV} server on port http://${HOST}:${PORT}`
  );
});
