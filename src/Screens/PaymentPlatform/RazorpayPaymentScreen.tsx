import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View, ActivityIndicator} from 'react-native';
import {RootStackScreenProps} from '../../Navigations/types';
import {
  RAZORPAYKEY_ID,
  RAZORPAYKEY_SECRET,
  updatePaymentService,
  verifySignatureRazorpayService,
} from '../../services';
import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RazorpayPaymentScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'RazorpayPaymentScreen'>) => {
  const {
    orderIdByRazorpay,
    orderID,
    courseContext,
    platform,
    price,
    userPaymentDetail,
  } = route.params.data;
  const [loading, setLoading] = useState(true);
  const [paymentUrl, setPaymentUrl] = useState('');

  async function cancelPaymentLink() {
    const paymentLinkId = await AsyncStorage.getItem('paymentID_creation');
    try {
      const response = await axios.post(
        `https://api.razorpay.com/v1/payment_links/${paymentLinkId}/cancel`,
        {},
        {
          auth: {
            username: RAZORPAYKEY_ID,
            password: RAZORPAYKEY_SECRET,
          },
        },
      );

      await AsyncStorage.removeItem('paymentID_creation');
      return response.data;
    } catch (error: any) {
      console.error(
        'Error cancelling payment link:',
        error.response ? error.response.data : error.message,
      );
      throw error;
    }
  }

  const paymentbyuser = async (payment_data: any) => {
    if (
      payment_data.status === 'cancelled' ||
      payment_data.status === 'expired'
    ) {
      setLoading(true);
      const update = await updatePaymentService({
        order_id: orderID?.orderId,
        amount: orderIdByRazorpay?.amount,
        gateway: 'Razorpay',
        status: 'Faliure',
        transactionId:
          payment_data.payments.length > 0
            ? payment_data.payments[0].payment_id
            : '',
        paymentMode:
          payment_data.payments.length > 0
            ? payment_data.payments[0].method
            : 'Online',
        date: orderIdByRazorpay?.created_at,
        currency: orderIdByRazorpay.currency,
        response: JSON.stringify({
          paymentStatus: 'Faliure',
          orderIdByRazorpay: orderIdByRazorpay,
          paymentResponse: payment_data,
          verifyResponse: '',
        }),
      });

      navigation.navigate('FailureScreen', {
        orderID: orderID?.orderId,
      });

      setLoading(false);
    } else if (payment_data.status === 'paid') {
      setLoading(true);
      // const verify = await verifySignatureRazorpayService({
      //   key_id: RAZORPAYKEY_ID,
      //   key_secret: RAZORPAYKEY_SECRET,
      //   order_id: instance?.data?.razorpay_order_id,
      //   razorpay_payment_id: instance.data?.razorpay_payment_id,
      //   razorpay_signature: instance.data?.razorpay_signature,
      // });

      const update = await updatePaymentService({
        order_id: orderID?.orderId,
        amount: orderIdByRazorpay?.amount,
        gateway: 'Razorpay',
        status: 'Successfull',
        transactionId:
          payment_data.payments.length > 0
            ? payment_data.payments[0].payment_id
            : '',
        paymentMode:
          payment_data.payments.length > 0
            ? payment_data.payments[0].method
            : 'Online',
        date: orderIdByRazorpay?.created_at,
        currency: orderIdByRazorpay.currency,
        response: JSON.stringify({
          paymentStatus: 'Successfull',
          orderIdByRazorpay: orderIdByRazorpay,
          paymentResponse: payment_data,
          verifyResponse: 'verify',
        }),
      });

      navigation.navigate('SuccessfullScreen', {
        orderID: orderID?.orderId,
      });
      setLoading(false);
    }
  };

  async function getPaymentLinkStatus(paymentLinkId: string) {
    try {
      const response = await axios.get(
        `https://api.razorpay.com/v1/payment_links/${paymentLinkId}`,
        {
          auth: {
            username: RAZORPAYKEY_ID,
            password: RAZORPAYKEY_SECRET,
          },
        },
      );
      return response.data;
    } catch (error: any) {
      console.error(
        'Error fetching payment link status:',
        error.response ? error.response.data : error.message,
      );
      throw error;
    }
  }

  const handleWebViewNavigationStateChange = async (event: any) => {
    if (event) {
      const urlID = await event.title.split(' - ')[2];

      if (!['', undefined].includes(urlID)) {
        getPaymentLinkStatus(`plink_${urlID}`)
          .then(data => {
            paymentbyuser(data);
            // if (data.status === 'paid') {
            //   navigation.navigate('SuccessfullScreen', {
            //     orderID: orderID.orderID,
            //   });
            // } else if (
            //   data.status === 'cancelled' ||
            //   data.status === 'expired'
            // ) {
            //   navigation.navigate('FailureScreen', {
            //     orderID: orderID.orderID,
            //   });
            // }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    }
  };

  async function createPaymentLink(amount: number, currency: string) {
    try {
      const response = await axios.post(
        'https://api.razorpay.com/v1/payment_links',
        {
          amount,
          currency,
        },
        {
          auth: {
            username: RAZORPAYKEY_ID,
            password: RAZORPAYKEY_SECRET,
          },
        },
      );

      await AsyncStorage.setItem('paymentID_creation', response.data.id);
      setPaymentUrl(response.data.short_url);
      return response.data;
    } catch (error) {
      console.error('Error creating payment link:', error);
      throw error;
    }
  }

  useEffect(() => {
    createPaymentLink(orderIdByRazorpay.amount, orderIdByRazorpay.currency);
  }, []);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'You Really want cancel your payment',
          'You have unsaved changes. Are you sure to cancel them and leave the screen?',
          [
            {text: "Don't leave", style: 'cancel', onPress: () => {}},
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () =>
                cancelPaymentLink()
                  .then(data => {
                    console.log('Payment Link Cancelled:', data);
                    paymentbyuser(data);
                  })
                  .catch(error => {
                    console.error('Error:', error);
                  }),
            },
          ],
        );
      }),
    [navigation],
  );

  if (!paymentUrl) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  //   const paymentURL = `https://api.razorpay.com/v1/checkout/embedded?key_id=${RAZORPAYKEY_ID}&order_id=${orderIdByRazorpay.id}`;

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: paymentUrl}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        // onNavigationStateChange={handleWebViewNavigationStateChange}
        onNavigationStateChange={request => {
          handleWebViewNavigationStateChange(request);
          return true;
        }}
        injectedJavaScript={`
            window.onload = function() {
              document.body.addEventListener('payment.success', function(event) {
                window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'payment.success', paymentId: event.detail.paymentId }));
              });
              document.body.addEventListener('payment.failed', function() {
                window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'payment.failed' }));
              });
            };
          `}
      />
      {loading && (
        <ActivityIndicator
          style={{position: 'absolute', top: '50%', left: '50%'}}
          size="large"
          color="#0000ff"
        />
      )}
    </View>
  );
};

export default RazorpayPaymentScreen;
