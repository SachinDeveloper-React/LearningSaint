import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RootStackScreenProps} from '../../Navigations/types';
import {getDateFormat} from '../../lib';

export default function OrderReceiptDetailedScreen({
  navigation,
  route,
}: RootStackScreenProps<'OrderReceiptDetailedScreen'>) {
  const {order} = route.params;

  const {
    id,
    siteid,
    user_id,
    course,
    courseUrl,
    coursePrice,
    customerAmount,
    currency,
    name,
    email,
    phone,
    address,
    coupon,
    couponAmount,
    referralId,
    ip,
    country,
    state,
    city,
    source,
    created_at,
    updated_at,
    payments,
  } = order;

  const date = getDateFormat(created_at);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                  navigation.goBack();
                }}>
                <FeatherIcon color="#0e0e0e" name="x" size={24} />
              </TouchableOpacity>
            </View>

            <Text numberOfLines={1} style={styles.headerTitle}>
              Receipt
            </Text>

            <View style={[styles.headerAction, {alignItems: 'flex-end'}]} />
          </View>

          <ScrollView
            contentContainerStyle={styles.receipt}
            showsVerticalScrollIndicator={false}>
            <View style={styles.receiptLogo}>
              {/* <FeatherIcon color="#fff" name="codepen" size={32} /> */}
              <Image
                source={require('../../assets/image/logo.png')}
                style={{
                  width: 44,
                  height: 44,
                  resizeMode: 'contain',
                  // marginLeft: 15,
                }}
              />
            </View>

            <Text style={styles.receiptTitle}>Learning Saint Inc.</Text>

            <Text style={styles.receiptSubtitle}>Order Id {id}</Text>

            <View style={styles.receiptPrice}>
              <Text style={styles.receiptPriceText}>
                {currency} {customerAmount}
              </Text>

              <Text
                style={[
                  styles.receiptPriceText,
                  {fontSize: 20, lineHeight: 32},
                ]}>
                .00
              </Text>
            </View>

            <Text style={styles.receiptDescription}>
              {course}: {currency} {coursePrice}
            </Text>

            <View style={styles.divider}>
              <View style={styles.dividerInset} />
            </View>

            <View style={styles.details}>
              <Text style={styles.detailsTitle}>Transaction details</Text>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Date</Text>

                <Text style={styles.detailsValue}>
                  {date.month} {date.modifyDate}, {date.year}
                </Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Source</Text>

                <Text style={styles.detailsValue}>{source}</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Receipt Number</Text>

                <Text style={styles.detailsValue}>{phone}</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing Name</Text>

                <Text style={styles.detailsValue}>{name}</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing Email</Text>

                <Text style={styles.detailsValue}>{email}</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing Address</Text>

                <Text style={styles.detailsValue}>{address}</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Country</Text>

                <Text style={styles.detailsValue}>{country}</Text>
              </View>
              {city && (
                <View style={styles.detailsRow}>
                  <Text style={styles.detailsField}>City</Text>

                  <Text style={styles.detailsValue}>{city}</Text>
                </View>
              )}
              {state && (
                <View style={styles.detailsRow}>
                  <Text style={styles.detailsField}>State</Text>

                  <Text style={styles.detailsValue}>{state}</Text>
                </View>
              )}
              {ip && (
                <View style={styles.detailsRow}>
                  <Text style={styles.detailsField}>IP</Text>

                  <Text style={styles.detailsValue}>{ip}</Text>
                </View>
              )}
            </View>

            {payments.length > 0 && (
              <View style={styles.details}>
                <Text style={styles.detailsTitle}>Payments details</Text>

                {payments.map((_, i) => {
                  const responseData = JSON.parse(_.response);

                  return (
                    <Fragment key={_.id}>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Platform</Text>

                        <Text style={styles.detailsValue}>{_.gateway}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Status</Text>

                        <Text style={styles.detailsValue}>
                          {responseData.paymentStatus}
                        </Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Order Id</Text>

                        <Text style={styles.detailsValue}>{_.order_id}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Payment Mode</Text>

                        <Text style={styles.detailsValue}>{_.paymentMode}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>ID</Text>

                        <Text style={styles.detailsValue}>
                          {responseData.orderIdByRazorpay.id}
                        </Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Receipt</Text>

                        <Text style={styles.detailsValue}>
                          {responseData.orderIdByRazorpay.receipt}
                        </Text>
                      </View>
                      {responseData.paymentStatus === 'Faliure' && (
                        <View style={styles.detailsRow}>
                          <Text style={styles.detailsField}>Message</Text>

                          <Text style={styles.detailsValue}>
                            {responseData.paymentResponse.description}
                          </Text>
                        </View>
                      )}
                    </Fragment>
                  );
                })}
              </View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingTop: 12,
    paddingHorizontal: 16,
    // paddingBottom: 12,
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
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'center',
  },
  /** Receipt */
  receipt: {
    alignItems: 'center',
    paddingTop: 16,
    // paddingBottom: 140,
  },
  receiptLogo: {
    width: 84,
    height: 84,
    borderRadius: 9999,
    marginBottom: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  receiptTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 2,
  },
  receiptSubtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: '#818181',
    marginBottom: 12,
  },
  receiptPrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 6,
  },
  receiptPriceText: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: 'bold',
    letterSpacing: 0.35,
    color: '#8338ec',
  },
  receiptDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#818181',
    textAlign: 'center',
    marginBottom: 12,
  },
  /** Avatar */
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  /** Divider */
  divider: {
    overflow: 'hidden',
    width: '100%',
    marginVertical: 24,
  },
  dividerInset: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#e5e5e5',
    borderStyle: 'dashed',
    marginTop: -2,
  },
  /** Details */
  details: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  detailsTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 16,
  },
  detailsRow: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  detailsField: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#8c8c8c',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  detailsValue: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    color: '#444',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'right',
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
    backgroundColor: '#8338ec',
    borderColor: '#8338ec',
    marginBottom: 12,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#8338ec',
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#8338ec',
  },
});
