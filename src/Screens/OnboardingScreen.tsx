import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Platform,
  PlatformIOSStatic,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CircularProgress, Paginator} from '../Components';

import {Colors, Size} from '../lib';
import {OnBoardingContext} from '../Context';

type Props = {};

const OnboardingScreen = ({navigation}: any) => {
  const isLargeScreen = Dimensions.get('window').width >= 768;
  const {width} = useWindowDimensions();
  const animatedPaging = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [progress, setProgress] = useState(50);
  const {onBoarding, setOnBoardingSetting} =
    React.useContext(OnBoardingContext);

  const onViewableItemsChanged = ({viewableItems, changed}: any) => {
    // console.log('Changed in this iteration', changed[0].index);
    if (changed[0].index === 0) {
      setProgress(50);
    } else {
      setProgress(progress * 2);
    }
  };
  if (Platform.OS === 'ios') {
    const platformIOS = Platform as PlatformIOSStatic;
  }

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setProgress(prev => (prev < 33.33 ? prev + 1 : 0));
  //   }, 0);
  //   return () => clearTimeout(interval);
  // }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <FlatList
        removeClippedSubviews={false}
        ref={flatListRef}
        data={[
          {
            id: 1,
            img: require('../assets/image/logo.png'),
            f_sentence: 'Earn while',
            s_sentence: 'you learn',
            description:
              'Gain expertise in trending skills and become tech-savvy for your bright ',
          },
          {
            id: 2,
            img: require('../assets/image/logo.png'),
            f_sentence: 'Get 100%',
            s_sentence: 'job guarantee',
            description:
              'Become the one to work with our renowned hiring partners and secure your future.',
          },
        ]}
        keyExtractor={({id}) => id.toFixed()}
        horizontal
        initialNumToRender={1}
        snapToAlignment="center"
        snapToInterval={width}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: animatedPaging}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        renderItem={({item}) => {
          const {description, f_sentence, s_sentence} = item;
          const imageSource =
            typeof item?.img === 'string' ? {uri: item?.img} : item?.img;
          return (
            <View
              style={{
                width: width,
              }}>
              <View
                style={{
                  flex: 1,
                  width: width * 0.9,
                  margin: 'auto',
                }}>
                <Image
                  source={imageSource}
                  // resizeMode="contain"
                  resizeMethod="scale"
                  style={{
                    resizeMode: 'contain',
                    width: isLargeScreen ? width * 0.5 : width * 0.9,
                    // backgroundColor: 'red',
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: Colors.default.dark,
                      fontSize: isLargeScreen ? 80 : Size.fontSize.xxxlg_30,
                      fontWeight: '600',
                      letterSpacing: 2,
                      marginTop: 10,
                    }}>
                    {f_sentence}
                  </Text>
                  <Text
                    style={{
                      color: Colors.default.dark,
                      fontSize: isLargeScreen ? 80 : Size.fontSize.xxxlg_30,
                      fontWeight: '600',
                      letterSpacing: 2,
                    }}>
                    {s_sentence}
                  </Text>
                  <Text
                    style={{
                      color: Colors.default.dark,
                      marginTop: 10,
                      fontSize: isLargeScreen
                        ? Size.fontSize.xxxlg_30
                        : Size.fontSize.md_16,
                      fontWeight: '400',
                    }}>
                    {description}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          width: width * 0.9,
          margin: 'auto',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Paginator data={[{id: 1}, {id: 2}]} scrollX={animatedPaging} />

        <Pressable
          style={{marginVertical: 20}}
          role="button"
          onPress={() => {
            if (progress === 100) {
              // navigation.navigate('LoginScreen');
              // navigation.reset({
              //   index: 0,
              //   routes: [{name: 'LoginScreen'}],
              // });
              setOnBoardingSetting(true);
              // navigation.reset({
              //   index: 0,
              //   routes: [{name: 'LoginScreen'}],
              // });
            } else {
              flatListRef?.current?.scrollToIndex({animated: true, index: 1});
            }
          }}>
          <CircularProgress
            size={100}
            strokeWidth={10}
            progress={progress}
            text={`${progress}%`}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
