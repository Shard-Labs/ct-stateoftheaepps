import { Transaction } from './types.ts';

// @desc      Get all transactions
// @route     GET api/transactions
const getTransactions = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: 'transactions',
  };
};

export { getTransactions };
