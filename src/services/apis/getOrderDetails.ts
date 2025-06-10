import {GETORDERDETAILS, instance} from '../domains';

export const getOrderDetailsService = async (body: {
  orderId: string | number;
}) => {
  try {
    const getOrderDetailResponse = await instance.post(GETORDERDETAILS, body);
    return getOrderDetailResponse.data;
  } catch (error) {
    console.log(`DEBUG: Faild to fetch get Order Details ${error}`);
    return true;
  }
};
