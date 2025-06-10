import React from 'react';
import {Animated} from 'react-native';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../lib';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const CircularProgress = ({size, strokeWidth, progress, text}: any) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <View style={{width: size, height: size}}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          <Circle
            stroke="#e6e6e6"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            stroke={Colors.dark.tint}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <View style={styles.textContainer}>
        <AntDesign name="arrowright" size={40} color={Colors.dark.tint} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CircularProgress;
