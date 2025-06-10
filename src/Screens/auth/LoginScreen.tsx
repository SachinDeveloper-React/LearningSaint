import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
  Alert,
} from 'react-native';
import {AuthContext, SkipContext} from "../../Context";
import {Colors} from '../../lib';
import {loginAuthentication} from '../../utils';
import {Loader} from '../../Components';
import { RootStackScreenProps } from '../../Navigations/types';

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<'LoginScreen'>) {
  const index = navigation.getState().index;

    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
  const {width} = useWindowDimensions();
  const {signIn, isLoading, isError, error} = React.useContext(AuthContext);
  const {setSkipSetting} = React.useContext(SkipContext);
  const [form, setForm] = useState({
    emailErrorActive: false,
    emailError: '',
    email: '',
    password: '',
    passwordError: '',
    passwordErrorActive: false,
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        enabled>
        <ScrollView
          bounces={false}
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
                <Text style={styles.title}>Welcome back!</Text>

                <Text style={styles.subtitle}>Sign in to your account</Text>
              </View>

              <View style={styles.form}>
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Email address</Text>

                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={email => setForm({...form, email})}
                    placeholder="email@example.com"
                    placeholderTextColor="#6b7280"
                    style={[
                      styles.inputControl,
                      {
                        borderWidth: form.emailErrorActive ? 0.3 : 0,
                        borderColor: 'red',
                        transform: [
                          {
                            scale: 1,
                          },
                        ],
                      },
                    ]}
                    value={form.email}
                  />
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Password</Text>

                  <TextInput
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={password => setForm({...form, password})}
                    placeholder="********"
                    placeholderTextColor="#6b7280"
                    style={[
                      styles.inputControl,
                      {
                        borderWidth: form.passwordErrorActive ? 0.3 : 0,
                        borderColor: 'red',
                        transform: [
                          {
                            scale: 1,
                          },
                        ],
                      },
                    ]}
                    secureTextEntry={true}
                    value={form.password}
                  />
                </View>

                <View style={styles.formAction}>
                  <TouchableOpacity
                    onPress={() => {
                      const fullSuccess = loginAuthentication(form, setForm);

                      fullSuccess ? signIn(form) : null;
                    }}>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>Sign in</Text>
                    </View>
                  </TouchableOpacity>
                  {error && (
                    <Text
                      style={[
                        styles.formFooter,
                        {
                          color: Colors.default.danger,
                          textDecorationLine: 'underline',
                          marginTop: 10,
                        },
                      ]}>
                      {error}
                    </Text>
                  )}
                </View>

                <TouchableOpacity
                  onPress={() => {
                    // handle link
                    navigation.navigate('RegisterScreen');
                  }}>
                  <Text style={styles.formFooter}>
                    Don't have an account?{' '}
                    <Text style={{textDecorationLine: 'underline'}}>
                      Sign up
                    </Text>
                  </Text>
                </TouchableOpacity>

                {/* <View style={styles.formAction}>
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert('Learning Saint Alert', 'Comming Soon...', [
                        {
                          text: 'Ok',
                          style: 'cancel',
                          isPreferred: true,
                        },
                      ]);
                      // navigation.navigate('MobileNumberLogin');
                    }}>
                    <View
                      style={[
                        styles.btn,
                        {
                          backgroundColor: 'transparent',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.btnText,
                          {
                            color: '#007aff',
                          },
                        ]}>
                        Login via Mobile Number
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View> */}

                <TouchableOpacity onPress={() => setSkipSetting(true)}>
                  <Text style={styles.formFooter}>Skip for Guest User.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
    // textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    // textAlign: 'center',
  },
  /** Form */
  form: {
    marginBottom: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
    marginTop: 15,
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
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
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
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
});
