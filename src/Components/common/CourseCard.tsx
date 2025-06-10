import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {Fragment, memo} from 'react';
import {Colors, Size} from '../../lib';
import Button from './Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {WEBSITEURL} from '../../services/domains/urls';
import {useMMKVString} from 'react-native-mmkv';

type Props = {
  edu_meta: {
    icon: string;
    iconSettings: string;
    id: number;
    title: string;
  }[];
  guaranteed: {title: string; url: string};
  id: number;
  image: string;
  navigate: string;
  price: {
    amount: number;
    amount_title: string;
    currency: string;
    currencySign: string;
  };
  rating: {rating_count: number};
  tag: string[];
  title: string;
  url: string;
};

enum ScreenNames {
  SapErpDetailScreen = 'SapErpDetailScreen',
  DataScienceDetailScreen = 'DataScienceDetailScreen',
  // Add other screen names here...
}

const CourseCard = (props: Props) => {
  const {image, edu_meta, title, rating, price, guaranteed, url, navigate} =
    props;
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const [token, setToken] = useMMKVString('@token');

  const paymentbyuser = (
    image: string,
    title: string,
    price: {
      amount: number;
      amount_title: string;
      currency: string;
      currencySign: string;
    },
    url: string,
  ) => {
    if (token) {
      Alert.alert(
        'Learning Saint Alert',
        'Select OK if you want to proceed with payment',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('ChoosePlatform', {
                courseContext: {
                  image: image,
                  title: title,
                  price: price,
                  url: url,
                },
              });
            },
          },
        ],
      );
    } else {
      Alert.alert('Learning Saint Alert', 'Please Login to proceed payment.', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Login',
          onPress: () => navigation.navigate('LoginScreen'),
        },
      ]);
    }
  };

  function isValidScreenName(
    screen: string,
  ): screen is keyof typeof ScreenNames {
    return screen in ScreenNames;
  }

  return (
    <View style={styles.cardShadow}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={item => {
          navigation.navigate('CourseDetails', {
            courseURL: `https://www.learningsaint.com/${url}`,
          });
          // if (isValidScreenName(navigate)) {
          //   const screenName: keyof typeof ScreenNames = navigate;
          //   navigation.navigate(screenName, {url: url});
          // } else {
          //   console.error('Invalid screen name:', navigate);
          // }
        }}
        style={[
          {
            width: width > 500 ? width * 0.3 : width * 0.6,
            backgroundColor: 'transparent',
            padding: 10,
          },
          styles.card,
        ]}>
        <Image
          source={{
            cache: 'force-cache',
            uri: image,
          }}
          alt=""
          height={width > 500 ? width * 0.15 : width * 0.3}
        />
        <View style={[styles.card_content]}>
          <View>
            <View style={styles.row_align_between}>
              {edu_meta.map((_: any) => {
                return (
                  <Fragment key={_.id}>
                    <View style={styles.row_align_between}>
                      {_.iconSettings === 'FontAwesome' ? (
                        <FontAwesome
                          style={{
                            marginRight: 5,
                            color: Colors.default.dark,
                          }}
                          name={_.icon}
                        />
                      ) : (
                        <AntDesign
                          style={{
                            marginRight: 5,
                            color: Colors.default.dark,
                          }}
                          name={_.icon}
                        />
                      )}
                      <Text
                        style={{
                          color: Colors.default.dark,
                        }}>
                        {_.title}
                      </Text>
                    </View>
                  </Fragment>
                );
              })}
            </View>

            <View role="heading">
              <Text
                role="heading"
                numberOfLines={2}
                adjustsFontSizeToFit={true}
                style={[
                  styles.title,
                  {
                    fontSize: Size.fontSize.xxxls_14,
                    color: Colors.default.dark,
                  },
                ]}>
                {title}
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:"space-between"
              }}>
              <View  style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/fluency/50/star--v1.png',
                    width: 20,
                    height: 20,
                  }}
                  resizeMethod="scale"
                  resizeMode="contain"
                />
                <Image
                  source={{
                    uri: 'https://img.icons8.com/fluency/50/star--v1.png',
                    width: 20,
                    height: 20,
                  }}
                  resizeMethod="scale"
                  resizeMode="contain"
                />
                <Image
                  source={{
                    uri: 'https://img.icons8.com/fluency/50/star--v1.png',
                    width: 20,
                    height: 20,
                  }}
                  resizeMethod="scale"
                  resizeMode="contain"
                />
                <Image
                  source={{
                    uri: 'https://img.icons8.com/fluency/50/star--v1.png',
                    width: 20,
                    height: 20,
                  }}
                  resizeMethod="scale"
                  resizeMode="contain"
                />
                <Image
                  source={{
                    uri: 'https://img.icons8.com/fluency/50/star--v1.png',
                    width: 20,
                    height: 20,
                  }}
                  resizeMethod="scale"
                  resizeMode="contain"
                />
              </View>
              <Text>{rating.rating_count}</Text>
            </View>

            <View
              style={{
                gap: 10,
                marginTop: 10,
              }}>
              <Button
                style={{
                  padding: 4,
                }}
                title={
                  price.amount_title === '0'
                    ? 'Pay'
                    : `${price.currencySign} ${price.amount_title}`
                }
                onPress={() => paymentbyuser(image, title, price, url)}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(CourseCard);

const styles = StyleSheet.create({
  cardShadow: {
    backgroundColor: Colors.default.light,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 2,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  card_content: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8,
  },
  card: {
    position: 'relative',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    margin: 4,
  },
  title: {
    fontSize: Size.fontSize.lmd_18,
    fontWeight: '700',
    color: '#000',
    marginVertical: Size.margin.xxs_4,
  },
  row_align_between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
