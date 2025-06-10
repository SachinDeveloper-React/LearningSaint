import {instance, VERIFYSIGNATUREBYRAZORPAY} from '../domains';
export const verifySignatureRazorpayService = async (body: {
  key_id: string;
  key_secret: string;
  order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) => {
  try {
    const verifySignatureRazorpayResponse = await instance.post(
      VERIFYSIGNATUREBYRAZORPAY,
      body,
    );
    return verifySignatureRazorpayResponse.data;
  } catch (err) {
    console.log(`DEBUG: Failed to verify signature ${err}`);
    return true;
  }
};
