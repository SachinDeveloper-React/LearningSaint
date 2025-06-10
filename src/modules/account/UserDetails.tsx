import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Size} from '../../lib';
import {Spacer} from '../../Components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useMMKVObject} from 'react-native-mmkv';
import {LocationType} from '../../utils';

type Props = {
  userProfile: {
    user?: {
      cpassword: string;
      created_at: string;
      email: string;
      email_verified_at: null | string;
      id: number;
      name: string;
      phone: null | string;
      status: string;
      type: string;
      updated_at: string;
    };
  };
};

const UserDetails = (props: Props) => {
  const [location, setLocation] = useMMKVObject<LocationType>('@location');

  const navigation = useNavigation();
  const {userProfile} = props;
  const {user} = userProfile;
  return (
    <View>
      <View>
        <Text style={styles.title}>My Courses</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MyCourseListScreen', {
              canGoBack: 0,
            })
          }
          activeOpacity={0.8}
          style={styles.userDetailcard_container}>
          <View style={[styles.card]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              My Courses
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}>
                {/* {user?.name} */}
              </Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                }}
                color={Colors.default.dark}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Spacer />
      </View>

      <View>
        <Text style={styles.title}>Presonal information</Text>
        <View style={styles.userDetailcard_container}>
          <View style={[styles.card]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Name
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}>
                {user?.name}
              </Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                }}
                color={Colors.default.dark}
              />
            </View>
          </View>
          <View style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Email
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}>
                {user?.email}
              </Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                }}
                color={Colors.default.dark}
              />
            </View>
          </View>

          <View style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Phone Number
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}>
                {user?.phone ?? 'NULL'}
              </Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                }}
                color={Colors.default.dark}
              />
            </View>
          </View>

          <View style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Status
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}>
                {user?.status}
              </Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                }}
                color={Colors.default.dark}
              />
            </View>
          </View>
        </View>
        <Spacer />
      </View>

      <View>
        <Text style={styles.title}>Login Information</Text>
        <View style={styles.userDetailcard_container}>
          <View style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Email
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}>
                {user?.email}
              </Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                  color: Colors.default.dark,
                }}
              />
            </View>
          </View>

          <View style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Password
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}>
                ********
              </Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                  color: Colors.default.dark,
                }}
              />
            </View>
          </View>
        </View>
        <Spacer />
      </View>

      <View>
        <Text style={styles.title}>Resourses</Text>
        <View style={styles.userDetailcard_container}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactScreen')}
            style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Contact Us
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}></Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                  color: Colors.default.dark,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('BugReportScreen')}
            style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Report Bug
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}></Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                  color: Colors.default.dark,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Rate in {Platform.OS === 'ios' ? 'App Store' : 'Play Store'}
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}></Text>
              <AntDesign
                name={'right'}
                style={{
                  textAlign: 'right',
                  color: Colors.default.dark,
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsScreen')}
            style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Terms & Condition
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}></Text>
              <AntDesign
                name="right"
                style={{
                  textAlign: 'right',
                  color: Colors.default.dark,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacyScreen')}
            style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Privacy Policy
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}></Text>
              <AntDesign
                name="right"
                style={{
                  textAlign: 'right',
                  color: Colors.default.dark,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('CountryScreen')}
            style={[styles.card, {}]}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: '600',
                },
              ]}>
              Country
            </Text>
            <View style={styles.card_rightSide}>
              <Text numberOfLines={1} style={styles.card_values}>
                {location?.countryCode}
              </Text>
              <AntDesign
                name="right"
                style={{
                  textAlign: 'right',
                  color: Colors.default.dark,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Spacer />
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    fontSize: Size.fontSize.xls_10,
    color: '#333',
    marginLeft: 10,
  },
  userDetailcard_container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  card: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  card_values: {
    color: '#333',
    fontSize: Size.fontSize.xxls_12,
    flex: 1,
    textAlign: 'right',
    marginRight: 5,
  },

  card_rightSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textColor: {
    color: Colors.default.dark,
  },
});
