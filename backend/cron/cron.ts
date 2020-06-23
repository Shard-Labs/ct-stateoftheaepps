import { Cron } from '../deps.ts';
import { config } from '../deps.ts';
import { getTransactions } from './jobs.ts';

const env = config();

const cronStart = () => {
  const cron = new Cron();

  cron.start();
  cron.add('0 0 * * *', () => {
    getTransactions(env.CONTRACT_URL);
  });

  getTransactions(env.CONTRACT_URL);
};

export default cronStart;
