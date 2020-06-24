import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

class Dapp extends Model {
  static table = 'dapps';
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
    tx_count: DataTypes.INTEGER,
    logo: DataTypes.TEXT,
    contract_address: {
      type: DataTypes.STRING,
      unique: true,
    },
  };
  static timestamps = true;
}

export default Dapp;
