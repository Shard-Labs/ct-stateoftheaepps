import Dapp from '../models/Dapp.ts';
import { Contract } from '../types.ts';

// Store dapp info to DB
const getTransactions = async (
  api_url: string,
  contracts: Contract[],
  height_url: string
) => {
  const currentHeight = await (await fetch(height_url)).json();
  const firstBlockToday = currentHeight.height - 480;
  console.log('Block height must be at least: ' + firstBlockToday);

  try {
    contracts.forEach(async (contract) => {
      const res = await fetch(api_url + contract.contract_address);
      const data = await res.json();

      // Keep only transactions in last 24 hours
      const filteredData = data.transactions.filter(
        (transaction: { [key: string]: number }) =>
          transaction.block_height >= firstBlockToday
      );

      console.log('Total number of transactions: ' + data.transactions.length);
      console.log('Filtered number of transactions: ' + filteredData.length);

      const dapp = await Dapp.where(
        'contract_address',
        contract.contract_address
      ).get();

      // Check if entry exists
      if (dapp.length > 0) {
        await Dapp.where('contract_address', contract.contract_address).update({
          dapp_name: contract.name,
          tx_count: filteredData.length,
          img_url: contract.image_url,
        });
      } else {
        await Dapp.create({
          dapp_name: contract.name,
          tx_count: filteredData.length,
          img_url: contract.image_url,
          contract_address: contract.contract_address,
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
