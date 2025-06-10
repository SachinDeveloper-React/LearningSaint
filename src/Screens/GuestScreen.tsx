import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Spacer} from '../utils';

type Props = {};

const GuestScreen = (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {width, scale} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:"#fff"
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: width * 0.9,
            margin: 'auto',
            alignSelf: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/image/logo.png')}
            resizeMode="contain"
            width={width / 2}
            height={width / 2}
            resizeMethod="resize"
            style={{
              width: width,
              height: width / 2,
              resizeMode: 'contain',
            }}
          />
          <Spacer />
          <Spacer />
          <Spacer />
          <Text
            allowFontScaling
            role="heading"
            nativeID="guest_user_1"
            style={{
              fontSize: 30,
              fontStyle: 'normal',
              fontWeight: '600',
              letterSpacing: 1,
              color: '#000',
            }}>
            Guest User
          </Text>
          <Spacer />
          <Text
            style={{
              fontSize: 14,
              fontStyle: 'normal',
              letterSpacing: 1,
              textAlign: 'center',
              color: '#000',
            }}>
            Move up in your career with specialisations from top universities
          </Text>
          <Spacer />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#e58c57', '#F17B34', '#ff660a']}
              style={[
                styles.linearGradient,
                {
                  width: width * 0.9,
                  borderRadius: (width * 0.9) / 2,
                },
              ]}>
              <Text style={styles.buttonText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight: '700',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
