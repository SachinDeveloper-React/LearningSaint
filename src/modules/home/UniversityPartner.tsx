import {
    Image,
    StyleSheet,
    Text,
    useColorScheme,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React from 'react';
  import {Colors, Size} from '../../lib';
  
  type Props = {};
  
  const UniversityPartner = (props: Props) => {
    const {width} = useWindowDimensions();
    const colorScheme = useColorScheme();
    return (
      <View
        style={{
          marginVertical: 10,
        }}>
        <Text
          style={[
            styles.header_text,
            {
              color: Colors.default.dark,
              fontSize: Size.fontSize.xls_10,
            },
          ]}>
          Partnering with World's leading{' '}
          <Text
            style={{
              color: Colors[colorScheme ?? 'light'].tint,
              fontSize: Size.fontSize.xls_10,
            }}>
            Universities and Companies
          </Text>
        </Text>
        <View>
          <Image
            source={require('../../assets/image/university-d-v2.png')}
            style={[styles.partner_image, {width: width * 0.9}]}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };
  
  export default UniversityPartner;
  
  const styles = StyleSheet.create({
    header_text: {
      textAlign: 'center',
      fontSize: Size.fontSize.md_16,
      fontWeight: '500',
      marginHorizontal: Size.margin.x_6,
      marginVertical: 10,
    },
    partner_image: {
      margin: 'auto',
      backgroundColor: 'transparent',
      // borderTopLeftRadius: Size.radius.xxxlg_30,
      // borderTopRightRadius: Size.radius.xxxlg_30,
    },
  });
  