// assignmentsService
import {ASSIGNMENT, instance} from '../domains';

export const assignmentsService = async (batchId: string | number) => {
  try {
    const assignmentResponse = await instance.post(ASSIGNMENT, {
      batchId: batchId,
    });
    return assignmentResponse;
  } catch (error) {
    console.log(`DEBUG: Faild to fetch batches ${error}`);
    return true;
  }
};
