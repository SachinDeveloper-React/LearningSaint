import RazorpayCheckout from 'react-native-razorpay';
import {COMPANYNAME, FAVICON} from '../../../services';

type option = {
  description: string;
  image: string;
  currency: string;
  key: string;
  amount: any;
  name: string;
  order_id: string;
  prefill: {
    email: string;
    contact: string;
    name: string;
  };
  theme: {
    color: string;
  };
};

export const paymentRazarpay = async ({
  totalprice,
  courseContext,
  userPaymentDetail,
  order_id,
}: any) => {
  try {
    var options: option = {
      description: 'Credits towards consultation',
      image: FAVICON,
      currency: courseContext.price.currency,
      key: 'rzp_test_p4abRLxCBaggGS',
      amount: totalprice,
      name: COMPANYNAME,
      order_id: order_id, //Replace this with an order_id created using Orders API.
      prefill: {
        email: userPaymentDetail.email,
        contact: userPaymentDetail.number,
        name: userPaymentDetail.name,
      },
      theme: {color: '#ff660a'},
    };

    const razorpay = await RazorpayCheckout.open(options);

    return {data: razorpay, error: false};
  } catch (error) {
    console.log('error', error);
    return {data: error, error: true};
  }
};
