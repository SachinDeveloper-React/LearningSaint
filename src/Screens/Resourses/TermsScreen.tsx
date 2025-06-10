import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

type Props = {};

const TermsScreen = (props: Props) => {
  return (
    <WebView
      source={{
        uri: 'https://www.learningsaint.com/terms-and-conditions',
      }}
      style={{flex: 1}}
    />
  );
};

export default TermsScreen;

const styles = StyleSheet.create({});
