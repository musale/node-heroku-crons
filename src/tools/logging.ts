import Logging from 'eelog';

const env: string = process.env.NODE_ENV;
const development = env === undefined || env === 'development';

const logger = new Logging({
  console: 'json',
  name: 'nodeHerokuApp'
});

export default logger;
