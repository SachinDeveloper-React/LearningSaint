import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src';
import './gesture-handler';
import {
  AuthProvider,
  NetworkProvider,
  OnBoardingProvider,
  SkipProvider,
} from './src/Context';
import {getDataValue} from './src/lib';

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <NavigationContainer>
        {/* <NetworkProvider> */}
          <OnBoardingProvider>
            <AuthProvider>
              <SkipProvider>
                <MyStack />
              </SkipProvider>
            </AuthProvider>
          </OnBoardingProvider>
        {/* </NetworkProvider> */}
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
