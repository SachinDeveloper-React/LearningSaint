// assignmentsService
import {EBOOK, instance} from '../domains';

export const eBookService = async (batchId: string | number) => {
  try {
    const ebookResponse = await instance.post(EBOOK, {
      batchId: batchId,
    });
    return ebookResponse;
  } catch (error) {
    console.log(`DEBUG: Faild to fetch batches ${error}`);
    return true;
  }
};
