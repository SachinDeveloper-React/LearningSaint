import {GETORDERLIST, instance} from '../domains';

export const getOrderService = async (body: {userId: string | number}) => {
  try {
    const getOrderResponse = await instance.post(GETORDERLIST, body);
    return getOrderResponse.data ?? [];
  } catch (error) {
    console.log(`DEBUG: Faild to fetch get order ${error}`);
    return true;
  }
};
