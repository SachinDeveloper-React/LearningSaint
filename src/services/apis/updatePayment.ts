import {instance, UPDATEPAYMENT} from '../domains';

export const updatePaymentService = async (body: {
  order_id: string;
  amount: string;
  gateway: string;
  status: string;
  transactionId: string;
  paymentMode: string;
  date: string;
  currency: string;
  response: any;
}) => {
  try {
    const updatePayemtResponse = await instance.patch(UPDATEPAYMENT, body);
    return updatePayemtResponse.data;
  } catch (err) {
    console.log('DEBUG: Faild to update payment', err);
    return true;
  }
};
