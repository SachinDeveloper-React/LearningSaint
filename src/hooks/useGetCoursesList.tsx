import React, {useContext, useEffect, useState} from 'react';
import {getOrderService} from '../services';
import {AuthContext} from '../Context';

type Props = {};

const useGetCoursesList = (props: Props) => {
  const [getOrder, setGetOrder] = useState<{
    data: {
      status: string;
      orders: {
        id: number;
        siteid: string;
        user_id: string;
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
        created_at: string;
        updated_at: string;
        payments: {
          id: number;
          order_id: string;
          amount: string;
          gateway: string;
          status: string;
          transactionId: string;
          paymentMode: string;
          date: string;
          currency: string;
          response: string;
          created_at: string;
          updated_at: string;
        }[];
      }[];
    };
    loading: boolean;
    error: string;
  }>({
    data: {
      status: '',
      orders: [],
    },
    loading: false,
    error: '',
  });
  const {userDetail} = useContext(AuthContext);

  useEffect(() => {
    setGetOrder({...getOrder, loading: true});
    (async () => {
      const response = await getOrderService({
        userId: Number(userDetail?.user?.id),
      });

      setGetOrder({
        ...getOrder,
        data: {
          orders: response.orders.reverse(),
          status: response.status,
        },
        loading: false,
      });
    })();
  }, []);
  return [getOrder];
};

export default useGetCoursesList;
