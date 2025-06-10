import {instance_crm_staging_node, STRIPEINTENTUPDATE} from '../../domains';

export const updateStripeIntentService = async (body: {
  currency: string;
  description: string;
  receipt_email: string;
  id: string;
  stripe_id: string;
}) => {
  try {
    const stripeIntent = await instance_crm_staging_node.patch(
      STRIPEINTENTUPDATE,
      body,
    );

    return stripeIntent.data;
  } catch (err) {
    console.log(`DEGUB: Faild to update a paymentIntent ${err}`);
    return true;
  }
};
