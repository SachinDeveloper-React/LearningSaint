import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabStack} from '.';
import {CustomDrawerContent} from '../Components';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: false,
        drawerAllowFontScaling: true,
        drawerPosition: 'right',
        drawerType: isLargeScreen ? 'front' : 'front',
        drawerStyle: isLargeScreen ? null : {width: '100%'},
        overlayColor: 'transparent',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="main"
        component={TabStack}
        options={{title: 'Welcome', headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
