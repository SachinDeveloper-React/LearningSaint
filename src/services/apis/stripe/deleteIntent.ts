import {instance_crm_staging_node, STRIPEINTENTDELETE} from '../../domains';

export const deleteStripeIntentService = async (body: {stripe_id: string}) => {
  try {
    const stripeIntent = await instance_crm_staging_node.post(
      STRIPEINTENTDELETE,
      body,
    );

    return stripeIntent.data;
  } catch (err) {
    console.log(`DEGUB: Faild to cencel a paymentIntent ${err}`);
    return true;
  }
};
