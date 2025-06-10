import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AccountScreen, HomeScreen, MyCoursesScreen} from '../Screens';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../Components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeTabParamList} from './types';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {AuthContext} from '../Context';
import {useMMKVString} from 'react-native-mmkv';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function App() {
  const [token, setToken] = useMMKVString('@token');
  const {isLoggedIn} = React.useContext(AuthContext);
  const navigation = useNavigation<DrawerNavigationProp<HomeTabParamList>>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff660a',
        lazy: true,
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        navigationKey="home"
        options={{
          title: 'Welcome',
          headerLeft: () => {
            return (
              <Image
                source={require('../assets/image/logo.png')}
                resizeMode="contain"
                referrerPolicy="same-origin"
                role="img"
                alt="logo"
                resizeMethod="resize"
                style={{
                  width: 60,
                  resizeMode: 'contain',
                  marginLeft: 15,
                }}
              />
            );
          },
          headerTitleStyle: {
            display: 'none',
          },

          headerRight: () => {
            return (
              <View
                style={{
                  marginRight: 15,
                }}>
                <Button
                  title="Courses"
                  onPress={() => navigation?.openDrawer()}
                />
              </View>
            );
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: true,
          tabBarStyle: {
            // backgroundColor: '#FFE3D2',
            elevation: 2,
          },
        }}
      />
      <Tab.Screen
        name="MyCoursesScreen"
        component={MyCoursesScreen}
        navigationKey="MyCoursesScreen"
        options={{
          title: 'Welcome',
          headerLeft: () => {
            return (
              <Image
                source={require('../assets/image/logo.png')}
                resizeMode="contain"
                referrerPolicy="same-origin"
                role="img"
                alt="logo"
                resizeMethod="resize"
                style={{
                  width: 60,
                  resizeMode: 'contain',
                  marginLeft: 15,
                }}
              />
            );
          },
          headerTitleStyle: {
            display: 'none',
          },

          headerRight: () => {
            return (
              <View
                style={{
                  marginRight: 15,
                }}>
                <Button
                  title="Courses"
                  onPress={() => navigation?.openDrawer()}
                />
              </View>
            );
          },
          tabBarLabel: 'My courses',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: true,
          tabBarStyle: {
            // backgroundColor: '#FFE3D2',
            elevation: 2,
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        listeners={({navigation}) => ({
          tabPress: e => {
            if (token) {
              // navigation.navigate('drawer');
            } else {
              e.preventDefault();
              navigation.navigate('guest');
            }
          },
        })}
        options={{
          // headerShadowVisible: false,
          // headerTransparent: true,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
          lazy: true,
          tabBarStyle: {
            // backgroundColor: '#FFE3D2',
            elevation: 2,
          },
        }}
      />
    </Tab.Navigator>
  );
}
