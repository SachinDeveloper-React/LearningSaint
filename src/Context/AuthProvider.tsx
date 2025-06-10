import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {
  CommonActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {loginService, registerService, userDetailService} from '../services';
import {RootStackParamList} from '../Navigations/types';
import {useMMKVBoolean} from 'react-native-mmkv';
import {setDataStorage} from '../lib/storage';

type Props = {
  children: ReactNode;
};

type AuthContextType = {
  isLoggedIn: boolean;
  isSignUp: boolean;
  userDetail: {
    user: {
      cpassword: string;
      created_at: string;
      email: string;
      email_verified_at: string | null;
      id: number;
      name: string;
      phone: string | number | null;
      status: string;
      type: string;
      updated_at: string;
    };
  };
  token: string | null;
  refreshToken: string | null;
  error: any;
  signUpError: string;
  isLoading: boolean;
  isError: boolean;
  signUpisError: boolean;
  signIn: (item: {email: string; password: string}) => void;
  signUp: (item: {name: string; email: string; password: string}) => void;
  logOut: () => void;
  getUser: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isSignUp: false,
  userDetail: {
    user: {
      cpassword: '',
      created_at: '',
      email: '',
      email_verified_at: null,
      id: 0,
      name: '',
      phone: null,
      status: '',
      type: '',
      updated_at: '',
    },
  },
  token: null,
  refreshToken: null,
  error: null,
  signUpError: '',
  isLoading: false,
  isError: false,
  signUpisError: false,
  signIn: () => {},
  signUp: () => {},
  logOut: () => {},
  getUser: () => {},
});

const AuthProvider = (props: Props) => {
  const {children} = props;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [loginState, setLoginState] = useMMKVBoolean('@login');
  const [auth, setAuth] = useState({
    isLoggedIn: loginState === undefined ? false : loginState,
    isSignUp: false,
    userDetail: {
      user: {
        cpassword: '',
        created_at: '',
        email: '',
        email_verified_at: null,
        id: 0,
        name: '',
        phone: null,
        status: '',
        type: '',
        updated_at: '',
      },
    },
    signUpError: '',
    signUpisError: false,
    token: null,
    refreshToken: null,
    error: null,
    isLoading: false,
    isError: false,
  });

  const signIn = async (item: {email: string; password: string}) => {
    try {
      setAuth({...auth, isLoading: true});
      const login = await loginService({
        email: item.email.toLowerCase(),
        password: item.password,
      });

      if (login.error) {
        setAuth({
          ...auth,
          isError: login.error,
          error: login.msg.message,
          isLoading: false,
        });
      } else {
        setDataStorage({
          key: '@login',
          value: true,
        });
        setDataStorage({
          key: '@token',
          value: `${login.data.token_type} ${login.data.access_token}`,
        });
        await getUser();

        navigation.navigate('Home');
      }
    } catch (error) {
      setAuth({
        ...auth,
        isError: true,
        error: null,
        isLoading: false,
      });
    }
  };
  const signUp = async (item: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      setAuth({...auth, isLoading: true});
      const register = await registerService(item);

      if (register.error) {
        setAuth({
          ...auth,
          signUpError: register.msg.message,
          signUpisError: register.error,
          isLoading: false,
        });
      } else {
        setAuth({
          ...auth,
          isSignUp: true,
          signUpError: '',
          signUpisError: register.error,
          isLoading: false,
        });

        navigation.goBack();
      }
    } catch (err) {
      setAuth({
        ...auth,
        signUpError: `Server Error ${err}`,
        signUpisError: true,
        isLoading: false,
      });
    }
  };
  const logOut = async () => {
    setDataStorage({
      key: '@login',
      value: false,
    });
    setDataStorage({
      key: '@token',
      value: '',
    });

    navigation.reset({
      routes: [
        {
          name: 'Home',
        },
      ],
      index: 0,
    });

    setAuth({...auth, isLoading: false});
  };
  const getUser = async () => {
    try {
      setAuth({...auth, isLoading: true});
      const userDetailResponse = await userDetailService();
      if (userDetailResponse === true) {
        setAuth({
          ...auth,
          isError: true,
          error: null,
          isLoading: false,
          userDetail: {
            user: {
              cpassword: '',
              created_at: '',
              email: '',
              email_verified_at: null,
              id: 0,
              name: '',
              phone: null,
              status: '',
              type: '',
              updated_at: '',
            },
          },
        });
      } else {
        setAuth({
          ...auth,
          isError: false,
          error: null,
          isLoading: false,
          userDetail: userDetailResponse?.data,
        });
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      getUser();
    }
  }, [auth.isLoggedIn]);
  return (
    <AuthContext.Provider
      value={{
        ...auth,
        getUser,
        logOut,
        signIn,
        signUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
