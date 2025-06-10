import {
    Image,
    Linking,
    SectionList,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';
  import React from 'react';
  import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
  import Icon from 'react-native-vector-icons/Octicons';
  import {categories} from '../utils';
  
  type Props = {};
  
  const CustomDrawerContent = ({navigation, ...props}: any) => {
    return (
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 10,
            marginRight: 20,
          }}>
          <Image
            source={require('../assets/image/logo.png')}
            resizeMode="contain"
            referrerPolicy="same-origin"
            role="img"
            alt="logo"
            resizeMethod="resize"
            style={{
              width: 60,
              height: 40,
              marginLeft: 15,
            }}
          />
          <Icon
            color="#ff660a"
            size={20}
            name={'x'}
            onPress={() => navigation.closeDrawer()}
          />
        </View>
        <SectionList
          scrollEnabled={false}
          sections={categories}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({item}) => (
            <DrawerItem
              label={item.name}
              to="right"
              style={{
                marginHorizontal: 20,
              }}
              allowFontScaling
              icon={({color, focused, size}) => {
                return (
                  <Icon
                    color={color}
                    size={size}
                    name={'dot-fill'}
                    style={{
                      color: '#ff660a',
                    }}
                  />
                );
              }}
              // onPress={() => Linking.openURL(item.navigate)}
              onPress={() =>
                navigation.navigate('CourseDetails', {
                  courseURL: item.navigate,
                })
              }
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <>
              <DrawerItem
                label={title}
                style={styles.header}
                labelStyle={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#000',
                }}
                pressOpacity={1}
                allowFontScaling
                onPress={() => true}
              />
            </>
          )}
        />
      </DrawerContentScrollView>
    );
  };
  
  export default CustomDrawerContent;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });
  