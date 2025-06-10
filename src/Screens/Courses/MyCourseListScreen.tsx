import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Loader} from '../../Components';
import {useGetCoursesList} from '../../hooks';
import {BeforeLogin} from '../../modules';
import {RootStackScreenProps} from '../../Navigations/types';
import {Colors} from '../../lib';

export default function MyCourseListScreen({
  navigation,
  route,
}: RootStackScreenProps<'MyCourseListScreen'>) {
  const [myCoursesList] = useGetCoursesList({});
  const [loaderToSet, setLoaderToSet] = useState(true);
  const [filter, setFilter] = useState({
    search: '100121',
    status: '',
    platform: '',
    amount: '',
    email: '',
  });
  const [courseList, setCourseList] = useState<any[]>([]);

  useEffect(() => {
    setCourseList(myCoursesList?.data?.orders ?? []);

    const timer = setTimeout(() => {
      setLoaderToSet(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [myCoursesList]);

  if (myCoursesList.loading || loaderToSet) {
    return <Loader />;
  }

  const handleSubmit = () => {
    if (!filter.search) {
      setCourseList(myCoursesList?.data?.orders);
      return;
    }
    const filterCourseList = myCoursesList?.data?.orders.filter(item => {
      return (
        item.course.toLowerCase().includes(filter.search.toLowerCase()) ||
        item.id.toString().includes(filter.search.toString()) ||
        item.email.toLowerCase().includes(filter.search.toLowerCase())
      );
    });

    setCourseList(filterCourseList);
  };

  const handleSearch = (text: any) => {
    setFilter({...filter, search: text});
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Online Orders</Text>

          <View style={styles.search}>
            <View style={styles.searchInput}>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Enter tracking code"
                  placeholderTextColor="#9eadba"
                  style={styles.input}
                  onChangeText={text => handleSearch(text)}
                />

                <View style={styles.inputIcon}>
                  <FeatherIcon color="#9eadba" name="box" size={16} />
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={courseList}
          removeClippedSubviews={false}
          keyExtractor={(_, i) => i.toString()}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return <BeforeLogin skip={false} />;
          }}
          contentContainerStyle={{
            // marginVertical: 10,
            paddingHorizontal: 14,
          }}
          renderItem={({index, item, separators}) => {
            const {
              id,
              course,
              coursePrice,
              customerAmount,
              currency,
              email,
              payments,
            } = item;

            const message = Array.isArray(payments)
              ? payments.length > 0
                ? payments[0].status === 'Successfull'
                  ? 'We will asign your batches as soon as posible'
                  : payments[0].gateway === 'Razorpay'
                  ? ''
                  : ''
                : 'N/A'
              : 'N/A';

            return (
              <TouchableOpacity
                style={styles.card}
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('OrderReceiptDetailedScreen', {
                    order: item,
                  });
                }}>
                <View style={styles.card_paymentDetails}>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <Text style={styles.paymentId}>{id}</Text>
                    <Text style={styles.paymentRef}>
                      {Array.isArray(payments)
                        ? payments.length > 0
                          ? [
                              '0',
                              null,
                              undefined,
                              'null',
                              'undefined',
                            ].includes(payments[0].transactionId)
                            ? 'N/A'
                            : payments[0].transactionId
                          : 'N/A'
                        : 'N/A'}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        {
                          color: Array.isArray(payments)
                            ? payments.length > 0
                              ? payments[0].status === 'Successfull'
                                ? Colors.default.success
                                : Colors.default.danger
                              : ''
                            : '',
                        },
                        styles.status,
                      ]}>
                      {Array.isArray(payments)
                        ? payments.length > 0
                          ? payments[0].status
                          : ''
                        : ''}
                    </Text>
                  </View>
                </View>
                <Text style={styles.label}>Payment Platform:</Text>
                <Text style={styles.value}>
                  {Array.isArray(payments)
                    ? payments.length > 0
                      ? payments[0].gateway
                      : ''
                    : ''}
                </Text>
                <Text style={styles.label}>Course Name:</Text>
                <Text style={styles.value}>{course}</Text>
                <Text style={styles.label}>Total Amount:</Text>
                <Text style={styles.value}>
                  {currency} {coursePrice}
                </Text>
                <Text style={styles.label}>You Paid:</Text>
                <Text style={styles.value}>
                  {currency} {customerAmount}
                </Text>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{email}</Text>

                <Text style={styles.note}>{message}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 14,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
    // marginTop: 24,
    marginBottom: 16,
  },
  /** Action */
  action: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginHorizontal: 8,
    backgroundColor: '#e8f0f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  /** Search */
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
  },
  /** Input */
  input: {
    height: 44,
    backgroundColor: '#f0f6fb',
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#222',
    borderColor: '#222',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
    backgroundColor: 'transparent',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

  headerSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  card: {
    backgroundColor: Colors.default.light,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  card_paymentDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentId: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentRef: {
    flex: 1,
    fontSize: 14,
    color: '#888',
    // marginBottom: 10,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: '#28a745',
    alignSelf: 'flex-end',
    // marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  note: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
  },
});
