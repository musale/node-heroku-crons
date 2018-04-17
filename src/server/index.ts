import * as express from 'express';
import * as schedule from 'node-schedule';
import log from '../tools/logging';

schedule.scheduleJob('* * * * *', function() {
  log.info(`Running a cron job at ${new Date().toISOString()}`);
});

const app = express();

app.get('/', (req, res) => {
  res.send({ success: 'home is here', error: null });
});

export default app;
