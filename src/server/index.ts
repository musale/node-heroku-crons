import * as express from 'express';
import * as schedule from 'node-schedule';

schedule.scheduleJob('* * * * *', function() {
  console.log('The answer to life, the universe, and everything!');
});

const app = express();

app.get('/', (req, res) => {
  res.send({ success: 'home is here', error: null });
});

export default app;
