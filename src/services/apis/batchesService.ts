import {BATCHES, instance} from '../domains';

export const batchesService = async () => {
  try {
    const BatchesResponse = await instance.post(BATCHES);
    return BatchesResponse;
  } catch (error) {
    console.log(`DEBUG: Faild to fetch batches ${error}`);
    return true;
  }
};
