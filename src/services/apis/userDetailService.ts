// https://crm.learningsaint.com/api/getCoursePrices

import {instance, USERDETAIL} from '../domains';

export const userDetailService = async () => {
  try {
    const userDetailResponse = await instance.post(USERDETAIL);
    return userDetailResponse;
  } catch (error) {
    console.log(`DEBUG: Fetch failed user details , ${error}`);
    return true;
  }
};
