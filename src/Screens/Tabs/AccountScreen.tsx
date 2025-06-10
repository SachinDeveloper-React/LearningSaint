import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import React, {useContext} from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {
  BackgroundWrapper,
  Button,
  Loader,
  Spacer,
} from '../../Components';
import {UserDetails, UserImage} from '../../modules';
import {useUserDetails} from '../../hooks';
import {AuthContext} from '../../Context';
import { HomeTabScreenProps } from '../../Navigations/types';

type Props = {};

const AccountScreen = ({navigation, route}: HomeTabScreenProps<'Account'>) => {
  const {logOut} = useContext(AuthContext);

  const headerHeight = useHeaderHeight();
  const {width} = useWindowDimensions();
  const [couses] = useUserDetails({});

  if (couses.isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: width * 0.9,
            margin: 'auto',
          }}>
          <UserImage />
          <Spacer />
          <UserDetails
            userProfile={couses.userDeatil ? couses.userDeatil : {}}
          />

          <Button
            title="Logout"
            onPress={logOut}
            style={{
              paddingVertical: 10,
            }}
          />
          {/* <AppVersion /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
});
