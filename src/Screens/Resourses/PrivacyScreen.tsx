import React from 'react';
import WebView from 'react-native-webview';

type Props = {};

const PrivacyScreen = (props: Props) => {
  return (
    <WebView
      source={{
        uri: 'https://www.learningsaint.com/privacy-policy',
      }}
      style={{flex: 1}}
    />
  );
};

export default PrivacyScreen;
