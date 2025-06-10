import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import {Colors} from '../../lib';
import {RootStackScreenProps} from '../../Navigations/types';
import {AuthContext} from '../../Context';
import {useMMKVObject} from 'react-native-mmkv';
import { isLargeScreen } from '../../lib/inilization';

const PaymentForm = ({
  navigation,
  route,
}: RootStackScreenProps<'PaymentForm'>) => {
  const {courseContext, platform, price} = route.params;
  const {userDetail} = useContext(AuthContext);
  const [location, setLocation] = useMMKVObject<{
    countryCode: string;
    countryName: string;
    currencyCode: string;
    currencySymbol: string;
    flag: string;
  }>('@location');
  const {width} = useWindowDimensions();
  const [form, setForm] = useState<{
    name: string;
    email: string;
    number: string;
    course: string;
    address: string;
    amount: string;
  }>({
    name: '',
    email: '',
    number: '',
    course: courseContext?.title,
    address: '',
    amount: '',
  });
  const [formError, setFormError] = useState<{
    nameError: string;
    emailError: string;
    numberError: string;
    courseError: string;
    addressError: string;
    amountError: string;
  }>({
    nameError: '',
    emailError: '',
    numberError: '',
    courseError: '',
    addressError: '',
    amountError: '',
  });

  useEffect(() => {
    if (userDetail?.user) {
      setForm({
        ...form,
        name: userDetail?.user?.name,
        email: userDetail?.user?.email,
        number: userDetail?.user?.phone?.toString() ?? '',
        course: courseContext?.title,
        amount: courseContext?.price?.currency === 'INR' ? '6000' : '200',
      });
    }
  }, []);

  const checkoutHandler = () => {
    if (
      form.name &&
      form.email &&
      form.course &&
      form.address &&
      form.number &&
      form.amount
    ) {
      if (!/^[a-zA-Z\s]+$/.test(form.name)) {
        setFormError({
          ...formError,
          nameError: 'Please enter a valid name.',
          emailError: '',
          courseError: '',
          numberError: '',
          addressError: '',
          amountError: '',
        });
        return;
      }

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
        setFormError({
          ...formError,
          emailError: 'Please enter a valid email.',
          courseError: '',
          numberError: '',
          addressError: '',
          amountError: '',
          nameError: '',
        });
        return;
      }

      if (
        location?.countryCode === 'IN'
          ? !/^\d{10}$/.test(form.number)
          : !/^\d{10,12}$/.test(form.number)
      ) {
        setFormError({
          ...formError,
          numberError: 'Please enter a valid phone number.',
          emailError: '',
          courseError: '',
          addressError: '',
          amountError: '',
          nameError: '',
        });
        return;
      }

      if (form.course !== courseContext?.title) {
        setFormError({
          ...formError,
          courseError: 'Course mismatch.',
          emailError: '',
          numberError: '',
          addressError: '',
          amountError: '',
          nameError: '',
        });
        return;
      }

      if (!form.address) {
        setFormError({
          ...formError,
          addressError: 'Please enter your address.',
          courseError: '',
          emailError: '',
          numberError: '',
          amountError: '',
          nameError: '',
        });
        return;
      }

      if (
        courseContext?.price?.currency === 'INR'
          ? Number(form.amount) <= 5000
          : Number(form.amount) <= 199
      ) {
        setFormError({
          ...formError,
          amountError:
            courseContext?.price?.currency === 'INR'
              ? 'Amount should be greater than 5000.'
              : 'Amount should be greater than 200.',
          addressError: '',
          courseError: '',
          nameError: '',
          emailError: '',
          numberError: '',
        });
        return;
      }

      if (Number(form.amount) > Number(courseContext.price.amount)) {
        setFormError({
          ...formError,
          amountError: `Amount should be lesser than or equal ${courseContext.price.amount}.`,
          addressError: '',
          courseError: '',
          nameError: '',
          emailError: '',
          numberError: '',
        });
        return;
      }

      setFormError({
        ...formError,
        amountError: '',
        addressError: '',
        courseError: '',
        nameError: '',
        emailError: '',
        numberError: '',
      });

      navigation.navigate('CheckoutScreen', {
        courseContext: courseContext,
        platform: platform,
        price: price,
        userPaymentDetail: form,
      });
    } else if (!form.name) {
      setFormError({
        ...formError,
        nameError: 'Please enter your name.',
        emailError: '',
        courseError: '',
        numberError: '',
        addressError: '',
        amountError: '',
      });
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
    ) {
      setFormError({
        ...formError,
        emailError: 'Please enter a valid email.',
        courseError: '',
        nameError: '',
        numberError: '',
        addressError: '',
        amountError: '',
      });
    } else if (
      location?.countryCode === 'IN'
        ? !/^\d{10}$/.test(form.number)
        : !/^\d{10,12}$/.test(form.number)
    ) {
      setFormError({
        ...formError,
        numberError: 'Please enter a valid phone number.',
        courseError: '',
        nameError: '',
        emailError: '',
        addressError: '',
        amountError: '',
      });
    } else if (form.course !== courseContext?.title) {
      setFormError({
        ...formError,
        courseError: 'Course mismatch.',
        nameError: '',
        emailError: '',
        numberError: '',
        addressError: '',
        amountError: '',
      });
    } else if (
      courseContext?.price?.currency === 'INR'
        ? Number(form.amount) <= 5000
        : Number(form.amount) <= 200
    ) {
      setFormError({
        ...formError,
        amountError:
          courseContext?.price?.currency === 'INR'
            ? 'Amount should be greater than 5000.'
            : 'Amount should be greater than 200.',
        courseError: '',
        nameError: '',
        emailError: '',
        numberError: '',
      });
    } else if (!form.address) {
      setFormError({
        ...formError,
        addressError: 'Please enter your address.',
        amountError: '',
        courseError: '',
        nameError: '',
        emailError: '',
        numberError: '',
      });
      return;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        enabled>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
          contentInsetAdjustmentBehavior="automatic">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={[
                styles.container,
                isLargeScreen
                  ? {
                      width: width * 0.7,
                      margin: 'auto',
                    }
                  : {},
              ]}>
              <View style={styles.header}>
                <Text style={styles.title}>Let's Get Started!</Text>
                <Text style={styles.title}>With {platform}</Text>
              </View>

              <View style={styles.form}>
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Full Name</Text>

                  <TextInput
                    inputMode="text"
                    clearButtonMode="while-editing"
                    onChangeText={name => setForm({...form, name})}
                    placeholder="Enter Your Name"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.name}
                  />
                  <Text
                    style={{
                      color: Colors.default.danger,
                    }}>
                    {formError.nameError}
                  </Text>
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Email Address</Text>

                  <TextInput
                    inputMode="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={email => setForm({...form, email})}
                    placeholder="Enter Your Email"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.email}
                  />
                  <Text
                    style={{
                      color: Colors.default.danger,
                    }}>
                    {formError.emailError}
                  </Text>
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Number</Text>

                  <TextInput
                    inputMode="numeric"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="numeric"
                    onChangeText={number => setForm({...form, number})}
                    placeholder="Enter your Number"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.number}
                    maxLength={
                      location ? (location?.countryCode === 'IN' ? 10 : 12) : 12
                    }
                  />
                  <Text
                    style={{
                      color: Colors.default.danger,
                    }}>
                    {formError.numberError}
                  </Text>
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Courses</Text>

                  <TextInput
                    inputMode="text"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={course => setForm({...form, course})}
                    placeholder="Courses"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.course}
                    editable={false}
                  />
                  <Text
                    style={{
                      color: Colors.default.danger,
                    }}>
                    {formError.courseError}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Address</Text>

                  <TextInput
                    inputMode="text"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={address => setForm({...form, address})}
                    placeholder="Enter Your Address"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.address}
                  />
                  <Text
                    style={{
                      color: Colors.default.danger,
                    }}>
                    {formError.addressError}
                  </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Amount</Text>

                  <TextInput
                    inputMode="numeric"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={amount => setForm({...form, amount})}
                    placeholder="10000"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.amount}
                    editable={true}
                  />
                  <Text
                    style={{
                      color: Colors.default.danger,
                    }}>
                    {formError.amountError}
                  </Text>
                </View>

                <View style={styles.formAction}>
                  <TouchableOpacity onPress={checkoutHandler}>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>Checkout</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PaymentForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  headerBack: {
    padding: 8,
    paddingTop: 0,
    position: 'relative',
    marginLeft: -16,
    marginBottom: 6,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
