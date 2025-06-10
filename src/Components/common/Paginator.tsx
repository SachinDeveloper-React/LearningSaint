import {Animated, StyleSheet, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {Colors} from '../../lib';

type Props = {
  data: any;
  scrollX: any;
};

const Paginator = (props: Props) => {
  const {data, scrollX} = props;
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: width * 0.06,
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: 'transparent',
      }}>
      {data.map((_: any, i: any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const slideX = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              {backgroundColor: Colors.dark.tint, width: slideX, opacity},
            ]}
            key={i}></Animated.View>
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 10 / 2,
    marginHorizontal: 8,
  },
});
