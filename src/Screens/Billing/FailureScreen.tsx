import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackScreenProps} from '../../Navigations/types';
import {Colors} from '../../lib';
import {getOrderDetailsService} from '../../services';
import {learningSaint_email, learningSaint_phonenumber} from '../../utils';
import {CommonActions} from '@react-navigation/native';

type Props = {};

const FailureScreen = ({
  navigation,
  route,
}: RootStackScreenProps<'FailureScreen'>) => {
  const {orderID} = route.params;
  const [orderDetail, setOrderDetail] = useState<{
    status: string;
    orderDetail: {
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
    };
    orderPayment: {
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
    };
  }>({
    status: 'success',
    orderDetail: {
      id: 0,
      siteid: '',
      user_id: '',
      course: '',
      courseUrl: '',
      coursePrice: '',
      customerAmount: '',
      currency: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      coupon: '',
      couponAmount: '',
      referralId: '',
      ip: '',
      country: '',
      state: '',
      city: '',
      source: '',
      created_at: '',
      updated_at: '',
    },
    orderPayment: {
      id: 0,
      order_id: '',
      amount: '',
      gateway: '',
      status: '',
      transactionId: '',
      paymentMode: '',
      date: '',
      currency: '',
      response: '',
      created_at: '',
      updated_at: '',
    },
  });
  useEffect(() => {
    (async () => {
      const getOrderDetails = await getOrderDetailsService({
        orderId: orderID,
      });
      setOrderDetail(getOrderDetails);
    })();
  }, []);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
        navigation.navigate('Home');
        // Prompt the user before leaving the screen
        // Alert.alert(
        //   'Are you rea',
        //   'You have unsaved changes. Are you sure to discard them and leave the screen?',
        //   [
        //     {text: "Don't leave", style: 'cancel', onPress: () => {}},
        //     {
        //       text: 'Discard',
        //       style: 'destructive',
        //       // If the user confirmed, then we dispatch the action we blocked earlier
        //       // This will continue the action that had triggered the removal of the screen
        //       onPress: () => navigation.navigate('Home'),
        //     },
        //   ],
        // );
      }),
    [navigation],
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Order Placed Failure</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.orderIdText}>
          For Order ID {orderDetail.orderDetail.id}
        </Text>
        <View style={styles.packageContainer}>
          <Text style={styles.packageTitle}>Courses(s)</Text>
          <Text style={styles.packageName}>
            {orderDetail.orderDetail.course}
          </Text>
          <Text style={styles.price}>
            {orderDetail.orderDetail.currency}{' '}
            {orderDetail.orderDetail.customerAmount}{' '}
            <Text style={styles.discountText}>
              (paid out Off) {orderDetail.orderDetail.coursePrice}
            </Text>
          </Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Price Paid</Text>
          <Text style={styles.totalPrice}>
            {orderDetail.orderDetail.currency}{' '}
            {orderDetail.orderDetail.customerAmount}
          </Text>
        </View>
        <Text style={styles.savedText}>You are not enrolled now!</Text>
        <Text style={styles.activationText}>
          You will receive an invoice soon on your registered mail ID.
        </Text>

        <Text style={styles.email}>{orderDetail.orderDetail.email}</Text>
        <Text style={styles.queryText}>Connect with us for any queries </Text>
        <Text style={styles.contactText}>
          📞 {learningSaint_phonenumber} ✉️ {learningSaint_email}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'drawer'}],
                }),
              );
            }, 100); // Adjust delay if needed

            // navigation.reset({
            //   routes: [
            //     {
            //       name: 'drawer',
            //     },
            //   ],
            //   index: 0,
            // });
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: Colors.default.tint,
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.default.dark,
  },
  orderIdText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.default.dark,
  },
  packageContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  packageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.default.dark,
  },
  packageName: {
    fontSize: 16,
    marginVertical: 5,
    color: Colors.default.dark,
  },
  price: {
    fontSize: 16,
    color: Colors.default.dark,
  },
  discountText: {
    // textDecorationLine: 'line-through',
    color: '#888',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.default.dark,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.default.dark,
  },
  savedText: {
    color: '#388e3c',
    marginVertical: 10,
    textAlign: 'center',
  },
  activationText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    color: Colors.default.dark,
  },
  emailText: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.default.dark,
  },
  email: {
    fontSize: 14,
    textAlign: 'center',
    color: '#388e3c',
    fontWeight: 'bold',
  },
  queryText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.default.dark,
  },
  contactText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.default.dark,
  },
  button: {
    backgroundColor: Colors.default.tint,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FailureScreen;
