import {RECORDINGS, instance} from '../domains';

export const recordingService = async (batchId: string | number) => {
  try {
    const recordingResponse = await instance.post(RECORDINGS, {
      batchId: batchId,
    });
    return recordingResponse;
  } catch (error) {
    console.log(`DEBUG: Faild to fetch batches ${error}`);
    return true;
  }
};
