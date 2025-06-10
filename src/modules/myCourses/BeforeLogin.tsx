import {
    Image,
    Linking,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React from 'react';
  import {Colors} from '../../lib';
  import {categories} from '../../utils';
  import {Button} from '../../Components';
  import {NavigationProp, useNavigation} from '@react-navigation/native';
  
  type Props = {
    skip: boolean;
  };
  
  const BeforeLogin = (props: Props) => {
    const {skip} = props;
    const navigation = useNavigation();
    const {width, fontScale} = useWindowDimensions();
    return (
      <View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../assets/image/emptyMyCourse.png')} />
          <Text
            allowFontScaling={true}
            style={{
              fontWeight: '800',
              fontSize: fontScale * 20,
              color: '#000',
              marginBottom: 10,
            }}>
            No Courses
          </Text>
          {skip && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                allowFontScaling={true}
                style={{
                  fontWeight: '400',
                  fontSize: fontScale * 15,
                  color: '#333',
                  // marginBottom: 10,
                }}>
                Enrolled users, please
              </Text>
  
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: fontScale * 15,
                    color: Colors.dark.tint,
                    marginLeft: 5,
                    textDecorationLine: 'underline',
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          )}
  
          <Button
            title="Explore Courses"
            onPress={() => navigation.navigate('drawer')}
            style={{
              width: width * 0.9,
              marginRight: 20,
              padding: 10,
            }}
          />
        </View>
        <View
          style={{
            width: width * 0.9,
            margin: 'auto',
          }}>
          <Text
            style={{fontSize: fontScale * 18, fontWeight: '600', color: '#333'}}>
            Browse Categories
          </Text>
  
          <SectionList
            scrollEnabled={false}
            sections={categories}
            keyExtractor={(item, index) => item.id.toString() + index}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => Linking.openURL(item.navigate)}>
                <Text
                  style={{
                    marginTop: index === 0 ? 10 : 0,
                    marginBottom: 10,
                    color: '#000',
                    fontSize: fontScale * 11,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            renderSectionHeader={({section: {title, id}}) => (
              <>
                <Text
                  style={{
                    fontSize: fontScale * 14,
                    fontWeight: '600',
                    color: '#000',
                    marginTop: id === 1 ? 20 : 0,
                  }}>
                  {title}
                </Text>
              </>
            )}
          />
        </View>
      </View>
    );
  };
  
  export default BeforeLogin;
  
  const styles = StyleSheet.create({
    textColor: {
      color: Colors.default.dark,
    },
  });
  