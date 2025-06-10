import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const Spacer = (props: Props) => {
  return <View style={styles.spacer} />;
};

export default Spacer;

const styles = StyleSheet.create({
  spacer: {
    marginVertical: 10,
  },
});
