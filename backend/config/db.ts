<<<<<<< HEAD
import { Database } from "../deps.ts";
import { config } from "../deps.ts";
import Dapp from "../models/Dapp.ts";
=======
import { Database } from '../deps.ts';
import { config } from '../deps.ts';
import Dapp from '../models/Dapp.ts';
>>>>>>> f208604... Add docker files

const env = config();

const connectToDB = () => {
  const db: any = new Database("sqlite3", {
    filepath: env.DB_PATH,
  });
  db.link([Dapp]);
<<<<<<< HEAD
=======

  // Create tables
  //db.sync();
>>>>>>> f208604... Add docker files

  // Create tables
  //db.sync({ drop: true });

  console.log("SQLite database started!");
};

export { connectToDB };
