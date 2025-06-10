import {
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  disabled?: boolean;
};

const Button = (props: Props) => {
  const {fontScale} = useWindowDimensions();
  const {title, style, disabled} = props;

  return (
    <>
      {Platform.OS === 'ios' ? (
        <>
          <Pressable {...props} disabled={disabled}>
            <View style={[styles.linearGradient_IOS, style]}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    fontSize: fontScale * 12,
                  },
                ]}>
                {title}
              </Text>
            </View>
          
          </Pressable>
        </>
      ) : (
        <>
          <Pressable {...props} disabled={disabled}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={
                disabled
                  ? ['#ccc', '#ccc', '#ccc']
                  : ['#e58c57', '#F17B34', '#ff660a']
              }
              style={[styles.linearGradient_ANDROID, style]}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    fontSize: fontScale * 12,
                  },
                ]}>
                {title}
              </Text>
            </LinearGradient>
          </Pressable>
        </>
      )}
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    margin: 5,
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight: '700',
  },
  linearGradient_IOS: {
    // paddingLeft: 15,
    // paddingRight: 15,
    borderRadius: 100,
    backgroundColor: '#F17B34',
  },
  linearGradient_ANDROID: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
  },
});
