// https://crm.learningsaint.com/api/getCoursePrices

import {COURSEPRICE, instance_crm} from '../domains';

export const coursePriceService = async () => {
  try {
    const course = await instance_crm.get(COURSEPRICE);
    return {
      data: course.data,
      isError: false,
      message: 'Course price fetched successfully',
    };
  } catch (error: any) {
    console.log(`DEBUG: Fetch course price ${error?.message}`);
    return {
      data: {},
      isError: true,
      message: error?.message,
    };
  }
};
