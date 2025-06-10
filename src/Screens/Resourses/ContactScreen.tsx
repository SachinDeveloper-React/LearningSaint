import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {Spacer} from '../../Components';
import {useNavigation} from '@react-navigation/native';
import {Colors, Size} from '../../lib';
type Props = {};

const ContactScreen = (props: Props) => {
  const {width} = useWindowDimensions();
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#fff',
      }}>
      {/* <Text style={styles.title}>Resourses</Text> */}
      <View
        style={[
          styles.userDetailcard_container,
          {
            width: width * 0.9,
            marginHorizontal: 'auto',
          },
        ]}>
        <TouchableOpacity
          onPress={() => navigate('ContactScreen')}
          style={[
            styles.card,
            {
              borderBottomWidth: 1,
            },
          ]}>
          <Text
            style={{
              fontWeight: '600',
              color: Colors.default.dark,
            }}>
            Address
          </Text>
          <View style={styles.card_rightSide}>
            <Text numberOfLines={2} style={styles.card_values}>
              A-51, Sector - 65, Noida, 201301 (U.P)
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('BugReportScreen')}
          style={[
            styles.card,
            {
              borderBottomWidth: 1,
            },
          ]}>
          <Text
            style={{
              fontWeight: '600',
              color: Colors.default.dark,
            }}>
            Contact Number
          </Text>
          <View style={styles.card_rightSide}>
            <Text numberOfLines={1} style={styles.card_values}>
              +91-9695913043
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:info@learningsaint.com')}
          style={[
            styles.card,
            {
              // borderBottomWidth: 1,
            },
          ]}>
          <Text
            style={{
              fontWeight: '600',
              color: Colors.default.dark,
            }}>
            Email
          </Text>
          <View style={styles.card_rightSide}>
            <Text numberOfLines={1} style={styles.card_values}>
              info@learningsaint.com
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Spacer />
    </View>
  );
};

export default ContactScreen;

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
    borderBottomColor: '#ccc',
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
});
