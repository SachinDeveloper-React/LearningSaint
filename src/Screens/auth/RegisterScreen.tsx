import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import {AuthContext} from '../../Context';
import {Loader} from '../../Components';
import {Colors} from '../../lib';
import { RootStackScreenProps } from '../../Navigations/types';

export default function RegisterScreen({
  navigation,
}: RootStackScreenProps<'RegisterScreen'>) {
  const {signUp, isLoading, signUpisError, signUpError} =
    useContext(AuthContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formError, setFormError] = useState<{
    nameError: string;
    emailError: string;
    passwordError: string;
  }>({
    nameError: '',
    emailError: '',
    passwordError: '',
  });

  const registerHandler = () => {
    if (form.name && form.email && form.password && form.confirmPassword) {
      if (!/^[a-zA-Z\s]+$/.test(form.name)) {
        setFormError({
          ...formError,
          nameError: 'Please enter a valid name.',
          emailError: '',
          passwordError: '',
        });

        return;
      }

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
        setFormError({
          ...formError,
          emailError: 'Please enter a valid email.',
          nameError: '',
          passwordError: '',
        });

        return;
      }

      if (form.password !== form.confirmPassword) {
        setFormError({
          ...formError,
          emailError: '',
          nameError: '',
          passwordError: 'Password is not same as confirm password',
        });
        return;
      }

      const item = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      signUp(item);
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      setFormError({
        ...formError,
        nameError: 'Please enter a valid name.',
        emailError: '',
        passwordError: '',
      });
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
    ) {
      setFormError({
        ...formError,
        emailError: 'Please enter a valid email.',
        nameError: '',
        passwordError: '',
      });
    } else if (form.confirmPassword !== form.password) {
      setFormError({
        ...formError,
        emailError: '',
        nameError: '',
        passwordError: 'Password is not same as confirm password',
      });
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.default.light}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        // keyboardVerticalOffset={100}
        enabled>
        <ScrollView
          bounces={false}
          automaticallyAdjustKeyboardInsets={true}
          contentInsetAdjustmentBehavior="automatic">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View style={styles.header}>
                <Text style={styles.title}>Let's Get Started!</Text>

                <Text style={styles.subtitle}>
                  Fill in the fields below to get started with your new account.
                </Text>
              </View>

              <View style={styles.form}>
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Full Name</Text>

                  <TextInput
                    clearButtonMode="while-editing"
                    onChangeText={name => setForm({...form, name})}
                    placeholder="Full Name"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.name}
                  />
                  <Text style={styles.error}>{formError.nameError}</Text>
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Email Address</Text>

                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={email => setForm({...form, email})}
                    placeholder="xyz@example.com"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.email}
                  />
                  <Text style={styles.error}>{formError.emailError}</Text>
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Password</Text>

                  <TextInput
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={password => setForm({...form, password})}
                    placeholder="********"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    secureTextEntry={true}
                    value={form.password}
                  />
                  <Text style={styles.error}>{formError.passwordError}</Text>
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Confirm Password</Text>

                  <TextInput
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={confirmPassword =>
                      setForm({...form, confirmPassword})
                    }
                    placeholder="********"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    secureTextEntry={true}
                    value={form.confirmPassword}
                  />
                  <Text style={styles.error}>{formError.passwordError}</Text>
                </View>

                <View style={styles.formAction}>
                  <TouchableOpacity onPress={registerHandler}>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>Register</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {signUpisError && (
                  <Text
                    style={{
                      color: Colors.default.danger,
                    }}>
                    {signUpError}
                  </Text>
                )}
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
                style={{marginTop: 'auto'}}>
                <Text style={styles.formFooter}>
                  Already have an account?{' '}
                  <Text style={{textDecorationLine: 'underline'}}>Sign in</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

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
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
  /** Header */
  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  /** Form */
  form: {
    // marginBottom: 24,
    paddingHorizontal: 24,
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 0,
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
  error: {
    color: Colors.default.danger,
  },
});
