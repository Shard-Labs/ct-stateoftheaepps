import { Cron } from '../deps.ts';
import { config } from '../deps.ts';
import { getTransactions } from './jobs.ts';
import contracts from '../config/contracts.ts';

const env = config();

const cronStart = () => {
  const cron = new Cron();

  cron.start();
  cron.add('0 0 * * *', () => {
    getTransactions(env.API_URL, contracts, env.HEIGHT_URL);
  });

  getTransactions(env.API_URL, contracts, env.HEIGHT_URL);
};

export default cronStart;
