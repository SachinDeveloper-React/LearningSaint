import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  initPaymentSheet,
  presentPaymentSheet,
} from '@stripe/stripe-react-native';
import {Alert, Platform} from 'react-native';
import {RootStackParamList} from '../../../Navigations/types';
import {
  deleteStripeIntentService,
  updatePaymentService,
  updateStripeIntentService,
} from '../../../services';

export const fetchPaymentSheetParams = async (
  navigation: any,
  userDetail: any,
  location: any,
  currency: string,
) => {
  try {
    const API_URL =
      Platform.OS === 'ios'
        ? 'http://localhost:8000'
        : 'http://192.168.0.112:8000'; // Replace with your API URL

    const body = JSON.stringify({
      amount: Number(userDetail.amount) * 100,
      currency: currency,
      name: userDetail.name,
      email: userDetail.email,
      description: `Buy a course ${userDetail.course}`,
      address: {
        line1: userDetail.address,
        city: location?.city?.names?.en,
        postal_code: '',
        state: location?.subdivisions?.iso_code,
        country: location?.country?.iso_code,
      },
    });

    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });
    const {paymentIntent, ephemeralKey, customer} = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  } catch (err) {
    console.log(err);
    // navigation.navigate('drawer');
    Alert.alert(
      'Learning Saint',
      'We are facing a some issue. We will fix it. Please you choose other platform for payment.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.pop(2)},
      ],
    );
  }
};

export const initializePaymentSheet = async (
  setLoading: any,
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'CheckoutScreen',
    undefined
  >,
  userDetail: any,
  location: any,
  currency: string,
) => {
  const {paymentIntent, ephemeralKey, customer, publishableKey}: any =
    await fetchPaymentSheetParams(navigation, userDetail, location, currency);

  const {error, paymentOption} = await initPaymentSheet({
    merchantDisplayName: 'Learning Saint',
    customerId: customer,
    customerEphemeralKeySecret: ephemeralKey,
    paymentIntentClientSecret: paymentIntent,
    // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
    //methods that complete payment after a delay, like SEPA Debit and Sofort.
    allowsDelayedPaymentMethods: true,
    billingDetailsCollectionConfiguration: {
      name: userDetail.name,
      email: userDetail.email,
      phone: userDetail.number,
    },
    defaultBillingDetails: {
      name: userDetail.name,
      email: userDetail.email,
      phone: userDetail.number,
      address: {
        line1: userDetail.address,
        city: location?.city?.names?.en,
        postalCode: '',
        state: location?.subdivisions?.iso_code,
        country: location.country?.iso_code,
      },
    },
    returnURL: 'learningSaint://stripe-redirect',
  });

  if (!error) {
    setLoading(true);
  }

  return {
    paymentIntent,
    ephemeralKey,
    customer,
    publishableKey,
    userDetail,
    location,
    currency,
  };
};

export const openPaymentSheet = async (
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'CheckoutScreen',
    undefined
  >,
  order_ID: string,
  paymentIntent:
    | {
        paymentIntent: any;
        ephemeralKey: any;
        customer: any;
        publishableKey: any;
        userDetail: any;
        location: any;
        currency: string;
      }
    | undefined,
) => {
  // see below
  const {error, paymentOption} = await presentPaymentSheet();

  if (error) {
    const updateIntent = await updateStripeIntentService({
      currency: paymentIntent?.currency.toString() ?? 'USD',
      description: `Cencel a Payment ${error.message}`,
      id: order_ID,
      receipt_email: paymentIntent?.userDetail?.email,
      stripe_id: paymentIntent?.paymentIntent,
    });

    if (updateIntent === true) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      const cancelIntent = await deleteStripeIntentService({
        stripe_id: paymentIntent?.paymentIntent,
      });

      if (cancelIntent !== true) {
        const update = await updatePaymentService({
          order_id: order_ID,
          amount: cancelIntent?.data.amount,
          gateway: 'Stripe',
          status: 'Faliure',
          transactionId: paymentIntent?.paymentIntent,
          paymentMode: 'Online',
          date: cancelIntent?.data?.canceled_at,
          currency: cancelIntent?.data?.currency,
          response: JSON.stringify({
            paymentStatus: 'Successfull',
            orderIdByStripe: paymentIntent,
            paymentResponse: cancelIntent,
            verifyResponse: '',
          }),
        });

        navigation.reset({
          routes: [
            {
              name: 'FailureScreen',
              params: {
                orderID: order_ID,
              },
            },
          ],
          index: 0,
        });
      } else {
        console.log('cancelIntent', cancelIntent);
        Alert.alert(`Error code: ${error.code}`, error.message);
      }
    }
  } else {
    const updateIntent = await updateStripeIntentService({
      currency: paymentIntent?.currency.toString() ?? 'USD',
      description: `Successfull`,
      id: order_ID,
      receipt_email: paymentIntent?.userDetail?.email,
      stripe_id: paymentIntent?.paymentIntent,
    });

    if (updateIntent === true) {
    } else {
      const update = await updatePaymentService({
        order_id: order_ID,
        amount: updateIntent?.data.amount,
        gateway: 'Stripe',
        status: 'Successfull',
        transactionId: paymentIntent?.paymentIntent,
        paymentMode: 'Online',
        date: updateIntent?.data?.canceled_at,
        currency: updateIntent?.data?.currency,
        response: JSON.stringify({
          paymentStatus: 'Successfull',
          orderIdByStripe: paymentIntent,
          paymentResponse: updateIntent,
          verifyResponse: '',
        }),
      });
      // Alert.alert('Success', 'Your order is confirmed!');
      navigation.reset({
        routes: [
          {
            name: 'SuccessfullScreen',
            params: {
              orderID: order_ID,
            },
          },
        ],
        index: 0,
      });
    }
  }
};
