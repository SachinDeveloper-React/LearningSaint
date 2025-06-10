import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const Loader = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
