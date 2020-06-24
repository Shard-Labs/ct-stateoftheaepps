import { Model, DataTypes } from "https://deno.land/x/denodb/mod.ts";

class Dapp extends Model {
  static table = "dapps";
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dapp_name: {
      type: DataTypes.STRING,
      unique: true,
    },
    website_url: DataTypes.STRING,
    description: DataTypes.STRING,
    tx_count: DataTypes.INTEGER,
<<<<<<< HEAD
=======
    logo: DataTypes.TEXT,
>>>>>>> 8a97735... Store images as base64
    contract_address: {
      type: DataTypes.STRING,
      unique: true,
    },
    logo: DataTypes.TEXT,
  };
  static timestamps = true;
}

export default Dapp;
