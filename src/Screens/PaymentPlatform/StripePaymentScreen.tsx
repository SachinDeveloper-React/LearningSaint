// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// type Props = {};

// const StripePaymentScreen = (props: Props) => {
//   return (
//     <View>
//       <Text>StripePaymentScreen</Text>
//     </View>
//   );
// };

// export default StripePaymentScreen;

// const styles = StyleSheet.create({});

import React from 'react';
import {View, Button, Platform} from 'react-native';
import {CardField, useConfirmPayment} from '@stripe/stripe-react-native';

function StripePaymentScreen() {
  const fetchPaymentIntentClientSecret = async () => {
    const apiEndpoint =
      Platform.OS === 'ios' ? 'http://localhost:8000' : 'http://10.0.2.2:4567';

    const response = await fetch(`${apiEndpoint}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {clientSecret} = await response.json();
    return clientSecret;
  };

  const {confirmPayment, loading} = useConfirmPayment();

  const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails = {
      email: 'jenny.rosen@example.com',
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',

      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      console.log('Payment confirmation error', error);
    } else if (paymentIntent) {
      console.log('Success from promise', paymentIntent);
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          //   width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
}

export default StripePaymentScreen;
