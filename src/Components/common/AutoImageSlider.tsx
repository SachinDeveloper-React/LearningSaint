import {
    Animated,
    Dimensions,
    Easing,
    Image,
    StyleSheet,
    View,
  } from 'react-native';
  import React, {useEffect, useRef} from 'react';
  
  type Props = {
    list: string[];
    reverse?: boolean;
  };
  const screenWidth = Dimensions.get('window').width;
  const AutoImageSlider = (props: Props) => {
    const {list, reverse = false} = props;
    //   const { width: screenWidth } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;
    const reverseScrollX = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      const scroll = Animated.loop(
        Animated.timing(scrollX, {
          toValue: -screenWidth, // Slide left by screenWidth
          duration: list.length * 1000, // Adjust the duration as per your requirement
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      );
      const reverseScroll = Animated.loop(
        Animated.timing(reverseScrollX, {
          toValue: screenWidth, // Slide left by screenWidth
          duration: list.length * 1000, // Adjust the duration as per your requirement
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      );
  
      scroll.start();
      reverseScroll.start();
  
      return () => {
        scroll.stop();
        reverseScroll.stop();
      };
    }, [scrollX, reverseScrollX]);
  
    return (
      <View
        style={
          reverse
            ? {
                flexDirection: 'row-reverse',
                overflow: 'hidden',
              }
            : {
                flexDirection: 'row',
                marginVertical: 20,
                overflow: 'hidden',
              }
        }>
        <Animated.View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            transform: [{translateX: reverse ? reverseScrollX : scrollX}],
          }}>
          {list.map((item, index) => (
            <View
              key={index}
              style={{
                width: screenWidth * 0.17,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  cache: 'force-cache',
                  uri: item,
                }}
                resizeMode="contain"
                style={{
                  width: screenWidth * 0.15,
                  height: screenWidth * 0.07,
                }}
              />
            </View>
          ))}
        </Animated.View>
        {/* Duplicate the data for infinite scroll effect */}
  
        <Animated.View
          style={{
            flexDirection: 'row',
            transform: [{translateX: reverse ? reverseScrollX : scrollX}],
          }}>
          {list.map((item, index) => (
            <View
              key={index}
              style={{
                width: screenWidth * 0.15,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  cache: 'force-cache',
                  uri: item,
                }}
                resizeMode="contain"
                style={{
                  width: screenWidth * 0.15,
                  height: screenWidth * 0.07,
                }}
              />
            </View>
          ))}
        </Animated.View>
      </View>
    );
  };
  
  export default AutoImageSlider;
  
  const styles = StyleSheet.create({});
  