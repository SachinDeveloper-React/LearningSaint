import React, {createContext, ReactNode, useEffect, useState} from 'react';
import { useMMKVBoolean } from 'react-native-mmkv';

type Props = {
  children: ReactNode;
};

type AuthContextType = {
  onBoarding: boolean | string | undefined;
  setOnBoardingSetting: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OnBoardingContext = createContext<AuthContextType>({
  onBoarding: false,
  setOnBoardingSetting: () => {},
});

const OnBoardingProvider = (props: Props) => {
  const {children} = props;
  const [onBoarding, setOnBoarding] = useMMKVBoolean('@onBoarding');

  const setOnBoardingSetting = async (item: any) => {
    setOnBoarding(item);
  };


  return (
    <OnBoardingContext.Provider value={{onBoarding, setOnBoardingSetting}}>
      {children}
    </OnBoardingContext.Provider>
  );
};

export default OnBoardingProvider;
