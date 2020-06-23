import { Database } from '../deps.ts';
import { config } from '../deps.ts';
import Dapp from '../models/Dapp.ts';

const env = config();

const connectToDB = () => {
  const db: any = new Database('sqlite3', {
    filepath: env.DB_PATH,
  });
  db.link([Dapp]);

  // Create tables
  //db.sync();

  console.log('SQLite database started!');
};

export { connectToDB };
