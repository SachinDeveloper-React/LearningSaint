// https://crm.learningsaint.com/api/getCoursePrices

import {CREATEORDERBYRAZORPAY, instance} from '../domains';

export const createOrderByRazorpayService = async (body: {
  key_id: string;
  key_secret: string;
  amount: number;
  currency: string;
  receipt: string;
  partial_payment: boolean;
  notes: any;
}) => {
  try {
    const createOrderByrazorpay = await instance.post(
      CREATEORDERBYRAZORPAY,
      body,
    );
    // console.log(course);
    return createOrderByrazorpay;
  } catch (error) {
    console.log(`DEBUG: Faild to create order by razorpay ${error}`);
    return true;
  }
};
