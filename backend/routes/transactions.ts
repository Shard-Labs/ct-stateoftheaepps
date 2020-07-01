import Dapp from '../models/Dapp.ts';

// @desc      Get dapps from DB
// @route     GET api/dapps
const getDapps = async ({ response }: { response: any }) => {
  try {
    const dapps = await Dapp.orderBy('tx_count', 'desc').all();

    response.body = {
      success: true,
      data: dapps,
    };
  } catch (e) {
    console.log(e.message);
    console.log(e.code);
    console.log(e.codeName);
  }
};

export { getDapps };
