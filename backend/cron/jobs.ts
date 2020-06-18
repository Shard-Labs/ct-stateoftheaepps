import Dapp from '../models/Dapp.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();

// Store dapp info to DB
const getTransactions = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const currentHeight = await (await fetch(env.HEIGHT_URL)).json();

    const firstBlockToday = currentHeight.height - 480;

    console.log('Block height must be at least: ' + firstBlockToday);

    // Keep only transactions in last 24 hours
    const filteredData = data.transactions.filter(
      (transaction: { [key: string]: number }) =>
        transaction.block_height >= firstBlockToday
    );

    console.log('Total number of transactions: ' + data.transactions.length);
    console.log('Filtered number of transactions: ' + filteredData.length);

    // Get contract address from URL
    const contract_address = url
      .split('/')
      .filter((e) => e)
      .slice(-1)[0];

    const dapp = await Dapp.where(
      'contract_address',
      data.transactions[0].tx.contract_id
    ).get();

    // Check if entry exists
    if (dapp.length > 0) {
      await Dapp.where('contract_address', contract_address).update({
        dapp_name: 'Placeholder',
        tx_count: filteredData.length,
        img_url: 'https://imgur.com/I80W1Q0.png',
      });
    } else {
      await Dapp.create({
        dapp_name: 'Placeholder',
        tx_count: filteredData.length,
        img_url: 'https://imgur.com/I80W1Q0.png',
        contract_address,
      });
    }
  } catch (e) {
    console.log(e.message);
    console.log(e.code);
    console.log(e.codeName);
  }
};

export { getTransactions };
