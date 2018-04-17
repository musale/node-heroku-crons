import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ success: 'home is here', error: null });
});

export default app;
