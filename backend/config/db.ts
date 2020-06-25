<<<<<<< HEAD
<<<<<<< HEAD
import { Database } from "../deps.ts";
import { config } from "../deps.ts";
import Dapp from "../models/Dapp.ts";
=======
import { Database } from '../deps.ts';
import { config } from '../deps.ts';
import Dapp from '../models/Dapp.ts';
>>>>>>> f208604... Add docker files
=======
import { Database } from "../deps.ts";
import { config } from "../deps.ts";
import Dapp from "../models/Dapp.ts";
>>>>>>> 2673bbd... Update Dockerfile

const env = config();

const connectToDB = () => {
  const db: any = new Database("sqlite3", {
    filepath: env.DB_PATH,
  });
  db.link([Dapp]);
<<<<<<< HEAD
=======

  // Create tables
<<<<<<< HEAD
  //db.sync();
>>>>>>> f208604... Add docker files
=======
  //db.sync({ drop: true });
>>>>>>> 80a2124... Change getTransactions to accept an array of contracts

<<<<<<< HEAD
  // Create tables
  //db.sync({ drop: true });

=======
>>>>>>> 2673bbd... Update Dockerfile
  console.log("SQLite database started!");
};

export { connectToDB };
