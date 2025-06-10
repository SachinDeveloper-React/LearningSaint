import {StyleSheet, Text, useColorScheme} from 'react-native';
import React from 'react';
import {Colors, Size} from '../../lib';

type Props = {
  title: string;
  color?: string;
};

const Header = (props: Props) => {
  const {title, color} = props;
  const colorScheme = useColorScheme();
  return (
    <Text
      style={[
        styles.heading,
        {
          color: Colors.default.dark,
        },
      ]}>
      {title}
    </Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  heading: {
    fontSize: Size.fontSize.xlmd_20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
