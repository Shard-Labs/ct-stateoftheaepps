import { Database } from 'https://deno.land/x/denodb/mod.ts';
import Dapp from '../models/Dapp.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();

const connectToDB = () => {
  const db: any = new Database('sqlite3', {
    filepath: env.DB_PATH,
  });

  db.link([Dapp]);
  db.sync();

  console.log('SQLite database started!');
};

export { connectToDB };
