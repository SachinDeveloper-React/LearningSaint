import {CLASSES, instance} from '../domains';

export const classesService = async (batchId: string | number) => {
  try {
    const ClassesResponse = await instance.post(CLASSES, {
      batchId: batchId,
    });
    return ClassesResponse;
  } catch (error) {
    console.log(`DEBUG: Faild to fetch batches ${error}`);
    return true;
  }
};
