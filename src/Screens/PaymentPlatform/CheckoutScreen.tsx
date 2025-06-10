import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Alert,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RootStackScreenProps} from '../../Navigations/types';
import {AuthContext} from '../../Context';
import {
  initializePaymentSheet,
  openPaymentSheet,
  paymentRazarpay,
} from '../../utils';
import {
  createOrderByRazorpayService,
  createOrderService,
  RAZORPAYKEY_ID,
  RAZORPAYKEY_SECRET,
  SITEID,
  SOURCE,
  updatePaymentService,
  verifySignatureRazorpayService,
} from '../../services';
import {Loader} from '../../Components';
import {useMMKVObject} from 'react-native-mmkv';
import {CommonActions} from '@react-navigation/native';

const paymentMethods = [
  {
    id: 'razorpay',
    label: 'Razorpay',
    img: 'https://www.learningsaint.com/assets/images/payment/razorpay.png',
    active: true,
  },
  {
    id: 'stripe',
    label: 'Stripe',
    img: 'https://www.learningsaint.com/assets/images/payment/stripe.png',
    active: false,
  },
];

export default function CheckoutScreen({
  navigation,
  route,
}: RootStackScreenProps<'CheckoutScreen'>) {
  const {scale} = useWindowDimensions();
  const {params} = route;
  const {courseContext, platform, price, userPaymentDetail} = params;
  const [fullLocationDetail, setFullLocationDetail] = useMMKVObject<any>(
    '@fullLocationDetail',
  );
  const [form, setForm] = React.useState({
    paymentMethod: paymentMethods[0].id,
  });

  const [loading, setLoading] = useState(false);
  const [loadingRazorpay, setLoadingRazorpay] = useState(false);

  const [stripePaymentIntent, setStripePaymentIntent] = useState<{
    paymentIntent: any;
    ephemeralKey: any;
    customer: any;
    publishableKey: any;
    userDetail: any;
    location: any;
    currency: string;
  }>();

  const {userDetail} = React.useContext(AuthContext);

  const paymentbyuser = async (orderIdByRazorpay: any, orderID: any) => {
    const totalprice = Number(userPaymentDetail?.amount) * 100;
    const instance: {
      data:
        | {
            razorpay_order_id: string;
            razorpay_payment_id: string;
          }
        | any;
      error: boolean;
    } = await paymentRazarpay({
      totalprice: totalprice,
      courseContext: courseContext,
      userPaymentDetail: userPaymentDetail,
      order_id: orderIdByRazorpay.id,
    });

    if (instance?.error === true) {
      const update = await updatePaymentService({
        order_id: orderID?.orderId,
        amount: orderIdByRazorpay?.amount,
        gateway: 'Razorpay',
        status: 'Faliure',
        transactionId: instance.error
          ? '0'
          : instance?.data?.razorpay_payment_id,
        paymentMode: 'Online',
        date: orderIdByRazorpay?.created_at,
        currency: orderIdByRazorpay.currency,
        response: JSON.stringify({
          paymentStatus: 'Faliure',
          orderIdByRazorpay: orderIdByRazorpay,
          paymentResponse: instance.data,
          verifyResponse: '',
        }),
      });

      // navigation.reset({
      //   routes: [
      //     {
      //       name: 'FailureScreen',
      //       params: {
      //         orderID: orderID?.orderId,
      //       },
      //     },
      //   ],
      //   index: 0,
      // });
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'FailureScreen',
                params: {
                  orderID: orderID?.orderId,
                },
              },
            ],
          }),
        );
      }, 100); // Adjust delay if needed

      setLoadingRazorpay(false);
    } else {
      const verify = await verifySignatureRazorpayService({
        key_id: RAZORPAYKEY_ID,
        key_secret: RAZORPAYKEY_SECRET,
        order_id: instance?.data?.razorpay_order_id,
        razorpay_payment_id: instance.data?.razorpay_payment_id,
        razorpay_signature: instance.data?.razorpay_signature,
      });

      const update = await updatePaymentService({
        order_id: orderID?.orderId,
        amount: orderIdByRazorpay?.amount,
        gateway: 'Razorpay',
        status: 'Successfull',
        transactionId: instance?.data?.razorpay_payment_id,
        paymentMode: 'Online',
        date: orderIdByRazorpay?.created_at,
        currency: orderIdByRazorpay.currency,
        response: JSON.stringify({
          paymentStatus: 'Successfull',
          orderIdByRazorpay: orderIdByRazorpay,
          paymentResponse: instance,
          verifyResponse: verify,
        }),
      });

      // navigation.reset({
      //   routes: [
      //     {
      //       name: 'SuccessfullScreen',
      //       params: {
      //         orderID: orderID?.orderId,
      //       },
      //     },
      //   ],
      //   index: 0,
      // });

      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'SuccessfullScreen',
                params: {
                  orderID: orderID?.orderId,
                },
              },
            ],
          }),
        );
      }, 100);
      setLoadingRazorpay(false);
    }
  };

  const createOrderByUser = async () => {
    setLoadingRazorpay(true);

    const orderID = await createOrderService({
      siteId: SITEID,
      user_id: userDetail?.user?.id ?? -1,
      course: courseContext?.title,
      courseUrl: courseContext?.url,
      coursePrice: courseContext?.price?.amount_title,
      customerAmount: userPaymentDetail.amount,
      currency: courseContext?.price?.currency,
      name: userPaymentDetail.name,
      email: userPaymentDetail.email,
      phone: userPaymentDetail.number,
      address: userPaymentDetail.address,
      coupon: '',
      couponAmount: '',
      referralId: '',
      ip: ['', undefined, null].includes(fullLocationDetail)
        ? ''
        : fullLocationDetail?.traits?.ip_address,
      country: ['', undefined, null].includes(fullLocationDetail)
        ? ''
        : fullLocationDetail?.country?.names?.en,
      state: ['', undefined, null].includes(fullLocationDetail)
        ? ''
        : fullLocationDetail?.subdivisions?.names?.en,
      city: ['', undefined, null].includes(fullLocationDetail)
        ? ''
        : fullLocationDetail?.city?.names?.en,
      source: SOURCE,
    });

    if (orderID?.data?.status === 'success') {
      if (platform === 'Stripe') {
        setLoadingRazorpay(false);

        openPaymentSheet(
          navigation,
          orderID?.data?.orderId,
          stripePaymentIntent,
        );
      } else {
        const orderIdByRazorpay = await createOrderByRazorpayService({
          key_id: RAZORPAYKEY_ID,
          key_secret: RAZORPAYKEY_SECRET,
          amount: Number(userPaymentDetail?.amount) * 100,
          currency: courseContext?.price?.currency,
          receipt: `receipt#${orderID?.data?.orderId}`,
          notes: {
            key1: `Order ID: ${orderID?.data?.orderId}`,
          },
          partial_payment: false,
        });
        if (orderIdByRazorpay === true) {
          setLoadingRazorpay(false);
          Alert.alert('Learning Saint', 'This time we are facing a issue', [
            {
              text: 'OK',
              style: 'default',
            },
          ]);
        } else {
          navigation.navigate('RazorpayPaymentScreen', {
            data: {
              orderIdByRazorpay: orderIdByRazorpay?.data,
              orderID: orderID?.data,
              courseContext,
              platform,
              price,
              userPaymentDetail,
            },
          });
          // await paymentbyuser(orderIdByRazorpay?.data, orderID?.data);
        }
      }
    } else {
      setLoadingRazorpay(false);
      Alert.alert(
        'Learning Saint Alert',
        'We are facing some issue. We solve as soon as posible. Please try after some time.',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('drawer'),
            style: 'cancel',
          },
        ],
      );
    }
  };

  useEffect(() => {
    (async () => {
      setForm({
        ...form,
        ['paymentMethod']: platform === 'Razorpay' ? 'razorpay' : 'stripe',
      });
      if (platform === 'Stripe') {
        const stripePaymentIntent: {
          paymentIntent: any;
          ephemeralKey: any;
          customer: any;
          publishableKey: any;
          userDetail: any;
          location: any;
          currency: string;
        } = await initializePaymentSheet(
          setLoading,
          navigation,
          userPaymentDetail,
          fullLocationDetail,
          courseContext?.price?.currency,
        );

        setStripePaymentIntent(stripePaymentIntent);
      } else setLoading(true);
    })();
  }, []);

  if (loadingRazorpay) {
    return <Loader />;
  }

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.header}>
          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
                navigation.goBack();
              }}>
              <FeatherIcon color="#1d1d1d" name="arrow-left" size={21} />
            </TouchableOpacity>
          </View>

          <Text style={styles.headerTitle}>Checkout</Text>

          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <FeatherIcon color="#1d1d1d" name="more-horizontal" size={21} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Summary</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.sectionAction}>
                <FeatherIcon color="#1A1A1A" name="arrow-right" size={17} />
              </TouchableOpacity>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Name</Text>

              <Text style={styles.summaryPrice}>{userPaymentDetail.name}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>E-mail</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <FeatherIcon color="#454545" name="help-circle" size={17} />
              </TouchableOpacity>

              <Text style={styles.summaryPrice}>{userPaymentDetail.email}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Number</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <FeatherIcon color="#454545" name="help-circle" size={17} />
              </TouchableOpacity>

              <Text style={styles.summaryPrice}>
                {userPaymentDetail.number}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Address</Text>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <FeatherIcon color="#454545" name="help-circle" size={17} />
              </TouchableOpacity>

              <Text style={styles.summaryPrice}>
                {userPaymentDetail.address}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Course</Text>

              <Text style={styles.summaryPrice}>
                {userPaymentDetail.course}
              </Text>
            </View>

            <View style={styles.summaryTotal}>
              <Text style={styles.summaryLabel}>Total Course Price</Text>

              <Text style={styles.summaryPricePrimary}>
                {courseContext.price.currencySign} {price} (
                {courseContext.price.currency})
              </Text>
            </View>

            <View style={styles.summaryTotal}>
              <Text style={styles.summaryLabel}>Total Pay</Text>

              <Text style={styles.summaryPricePrimary}>
                {/* {userPaymentDetail.amount} */}
                {courseContext.price.currencySign} {userPaymentDetail.amount} (
                {courseContext.price.currency})
              </Text>
            </View>

            {/* <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.sectionButton}>
              <FeatherIcon color="#1A1A1A" name="plus" size={14} />

              <Text style={styles.sectionButtonText}>Add more items</Text>
            </TouchableOpacity> */}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment methods</Text>

            <View style={styles.sectionBody}>
              {paymentMethods.map(({id, label, img}, index, arr) => {
                const isFirst = index === 0;
                const isLast = index === arr.length - 1;
                const isActive = form.paymentMethod === id;

                return (
                  <View
                    key={index}
                    style={[
                      styles.radioWrapper,
                      isActive && styles.radioActive,
                      isFirst && styles.radioFirst,
                      isLast && styles.radioLast,
                    ]}>
                    <TouchableOpacity
                      disabled
                      // onPress={() => setForm({...form, ['paymentMethod']: id})}
                      style={styles.radio}>
                      <View
                        style={[
                          styles.radioInput,
                          isActive && styles.radioInputActive,
                        ]}
                      />

                      <Image
                        alt=""
                        resizeMode="contain"
                        source={{uri: img}}
                        style={styles.radioImg}
                      />

                      <Text style={styles.radioLabel}>{label}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => createOrderByUser()}
          style={{flex: 1, paddingHorizontal: 4}}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Place Order</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingTop: 16,
    backgroundColor: '#f7f7f7',
    paddingBottom: 120,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#efefef',
    paddingHorizontal: 16,
  },
  headerAction: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1d1d1d',
  },
  /** Section */
  section: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e7e7e7',
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  sectionAction: {
    alignSelf: 'center',
    backgroundColor: '#f7f7f7',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
  },
  sectionButton: {
    marginTop: 12,
    alignSelf: 'flex-end',
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  sectionButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
    marginLeft: 4,
  },
  sectionBody: {
    marginTop: 16,
  },
  summaryRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    marginRight: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#454545',
  },
  summaryPrice: {
    marginLeft: 'auto',
    fontSize: 16,
    fontWeight: '500',
    color: '#454545',
  },
  summaryTotal: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
    paddingTop: 8,
  },
  summaryPriceOld: {
    marginLeft: 'auto',
    fontSize: 15,
    fontWeight: '500',
    color: '#5D5D5D',
    textDecorationLine: 'line-through',
  },
  summaryPricePrimary: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  /** Radio */
  radio: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  radioWrapper: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7e5',
    marginTop: -2,
  },
  radioActive: {
    backgroundColor: '#f1f4ff',
  },
  radioFirst: {
    marginTop: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  radioLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  radioInput: {
    width: 16,
    height: 16,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#1d1d1d',
    marginRight: 12,
  },
  radioInputActive: {
    borderWidth: 5,
    borderColor: '#1d1d1d',
  },
  radioImg: {
    width: 40,
    height: 30,
    borderWidth: 1,
    borderColor: '#CBCBCB',
    borderRadius: 4,
    marginRight: 12,
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1d1d1d',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#F82E08',
    borderColor: '#F82E08',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.45,
  },
});
