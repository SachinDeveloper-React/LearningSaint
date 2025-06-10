import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {CommonActions, NavigationProp, useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../Navigations/types';
import { useMMKVBoolean } from 'react-native-mmkv';
import { setDataStorage } from '../lib/storage';

type Props = {
  children: ReactNode;
};

type AuthContextType = {
  skip: boolean | string | undefined;
  setSkipSetting: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SkipContext = createContext<AuthContextType>({
  skip: false,
  setSkipSetting: () => {},
});

const SkipProvider = (props: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {children} = props;
  const [skip, setSkip] = useMMKVBoolean('@skip');

  const setSkipSetting = async (item: any) => {
    setDataStorage({
      key: '@skip',
      value: item,
    });

    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'drawer' }],
        })
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
  };
  return (
    <SkipContext.Provider value={{skip, setSkipSetting}}>
      {children}
    </SkipContext.Provider>
  );
};

export default SkipProvider;
