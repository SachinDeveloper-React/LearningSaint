// https://crm.learningsaint.com/api/getCoursePrices

import {CREATEORDER, instance} from '../domains';

export const createOrderService = async (body: {
  siteId: number;
  user_id: number;
  course: string;
  courseUrl: string;
  coursePrice: string;
  customerAmount: string;
  currency: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  coupon: string;
  couponAmount: string;
  referralId: string;
  ip: string;
  country: string;
  state: string;
  city: string;
  source: string;
}) => {
  try {
    const createOrder = await instance.post(CREATEORDER, body);
    // console.log(course);
    return createOrder;
  } catch (error) {
    console.log('DEBUG: Faild to create order');
  }
};
