import React, {useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {country, LocationType} from '../../utils';
import {useMMKVObject} from 'react-native-mmkv';
import {Colors} from '../../lib';
import { RootStackScreenProps } from '../../Navigations/types';

export default function CountryScreen({
  navigation,
  route,
}: RootStackScreenProps<'CountryScreen'>) {
  const [value, setValue] = React.useState(1);
  const [location, setLocation] = useMMKVObject<LocationType>('@location');

  useEffect(() => {
    const id = country.find(item => item.countryCode === location?.countryCode);

    setValue(Number(id?.id) - 1);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
      <TouchableOpacity
        onPress={() => {
          // handle onPress
          navigation.goBack();
        }}
        style={styles.headerClose}>
        <FeatherIcon color="#1d1d1d" name="x" size={24} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select Country</Text>

        <Text style={styles.headerSubtitle}>
          The terms and services which apply to you will depend on your country
          of residence
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {country.map(
          (
            {id, countryCode, countryName, currencyCode, currencySymbol},
            index,
          ) => {
            const isActive = value === index;

            return (
              <TouchableOpacity
                key={id}
                disabled
                // onPress={() => {
                //   setValue(index);
                // }}
                style={styles.radioWrapper}>
                <Image
                  alt={`Flag of ${countryName}`}
                  style={styles.radioImage}
                  source={{
                    uri: `https://flagsapi.com/${countryCode}/flat/64.png`,
                  }}
                />

                <View
                  style={[styles.radio, index === 0 && {borderTopWidth: 0}]}>
                  <Text style={styles.radioLabel}>{countryName}</Text>

                  <View
                    style={[
                      styles.radioCheck,
                      isActive && styles.radioCheckActive,
                    ]}>
                    <FontAwesome
                      color="#fff"
                      name="check"
                      style={!isActive && {display: 'none'}}
                      size={12}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  headerClose: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 6,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  headerSubtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    marginTop: 6,
  },
  /** Radio */
  radio: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#e8e8e8',
    height: 54,
    paddingRight: 24,
  },
  radioWrapper: {
    paddingLeft: 24,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  radioImage: {
    width: 30,
    height: 30,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 2,
  },
  radioCheck: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: '#999B9A',
  },
  radioCheckActive: {
    borderColor: Colors.default.tint,
    backgroundColor: Colors.default.tint,
  },
});
