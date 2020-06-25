<<<<<<< HEAD
<<<<<<< HEAD
import Dapp from "../models/Dapp.ts";
import { Contract } from "../types.ts";
import { Base64 } from "../deps.ts";
=======
import Dapp from '../models/Dapp.ts';
<<<<<<< HEAD
import { config } from '../deps.ts';

const env = config();
>>>>>>> f208604... Add docker files
=======
import { Contract } from '../types.ts';
<<<<<<< HEAD
>>>>>>> 80a2124... Change getTransactions to accept an array of contracts
=======
import { Base64 } from '../deps.ts';
>>>>>>> 8a97735... Store images as base64
=======
import Dapp from "../models/Dapp.ts";
import { Contract } from "../types.ts";
import { Base64 } from "../deps.ts";
>>>>>>> 5cb050f... Update Dapp model with website_url and description fields

// Store dapp info to DB
const getTransactions = async (
  api_url: string,
  contracts: Contract[],
<<<<<<< HEAD
<<<<<<< HEAD
  height_url: string,
) => {
  const currentHeight = await (await fetch(height_url)).json();
  const firstBlockToday = currentHeight.height - 480;
  console.log("Block height must be at least: " + firstBlockToday);
=======
  height_url: string
) => {
  const currentHeight = await (await fetch(height_url)).json();
  const firstBlockToday = currentHeight.height - 480;
  console.log('Block height must be at least: ' + firstBlockToday);
>>>>>>> 80a2124... Change getTransactions to accept an array of contracts
=======
  height_url: string,
) => {
  const currentHeight = await (await fetch(height_url)).json();
  const firstBlockToday = currentHeight.height - 480;
  console.log("Block height must be at least: " + firstBlockToday);
>>>>>>> 5cb050f... Update Dapp model with website_url and description fields

  try {
    contracts.forEach(async (contract) => {
      const res = await fetch(api_url + contract.contract_address);
      const data = await res.json();

      // Keep only transactions in last 24 hours
      const filteredData = data.transactions.filter(
        (transaction: { [key: string]: number }) =>
<<<<<<< HEAD
<<<<<<< HEAD
          transaction.block_height >= firstBlockToday,
      );

      console.log("Total number of transactions: " + data.transactions.length);
      console.log("Filtered number of transactions: " + filteredData.length);

      const base64image = Base64.fromFile(
        `${Deno.cwd()}/public/img/${contract.image_name}`,
      ).toString();

      const dapp = await Dapp.where(
        "contract_address",
        contract.contract_address,
=======
          transaction.block_height >= firstBlockToday
=======
          transaction.block_height >= firstBlockToday,
>>>>>>> 5cb050f... Update Dapp model with website_url and description fields
      );

      console.log("Total number of transactions: " + data.transactions.length);
      console.log("Filtered number of transactions: " + filteredData.length);

      const base64image = Base64.fromFile(
        `${Deno.cwd()}/public/img/${contract.image_name}`,
      ).toString();

      const dapp = await Dapp.where(
<<<<<<< HEAD
        'contract_address',
        contract.contract_address
>>>>>>> 80a2124... Change getTransactions to accept an array of contracts
=======
        "contract_address",
        contract.contract_address,
>>>>>>> 5cb050f... Update Dapp model with website_url and description fields
      ).get();

      // Check if entry exists
      if (dapp.length > 0) {
<<<<<<< HEAD
<<<<<<< HEAD
        await Dapp.where("contract_address", contract.contract_address).update({
          dapp_name: contract.name,
          website_url: contract.website_url,
          description: contract.description,
          tx_count: filteredData.length,
          logo: base64image,
=======
        await Dapp.where('contract_address', contract.contract_address).update({
=======
        await Dapp.where("contract_address", contract.contract_address).update({
>>>>>>> 5cb050f... Update Dapp model with website_url and description fields
          dapp_name: contract.name,
          website_url: contract.website_url,
          description: contract.description,
          tx_count: filteredData.length,
<<<<<<< HEAD
          img_url: contract.image_url,
>>>>>>> 80a2124... Change getTransactions to accept an array of contracts
=======
          logo: base64image,
>>>>>>> 8a97735... Store images as base64
        });
      } else {
        await Dapp.create({
          dapp_name: contract.name,
<<<<<<< HEAD
<<<<<<< HEAD
          website_url: contract.website_url,
          description: contract.description,
          tx_count: filteredData.length,
          contract_address: contract.contract_address,
          logo: base64image,
=======
=======
          website_url: contract.website_url,
          description: contract.description,
>>>>>>> 5cb050f... Update Dapp model with website_url and description fields
          tx_count: filteredData.length,
          contract_address: contract.contract_address,
<<<<<<< HEAD
>>>>>>> 80a2124... Change getTransactions to accept an array of contracts
=======
          logo: base64image,
>>>>>>> 5cb050f... Update Dapp model with website_url and description fields
        });
      }
    });
  } catch (e) {
    console.log(e.message);
    console.log(e.code);
    console.log(e.codeName);
  }
};

export { getTransactions };
