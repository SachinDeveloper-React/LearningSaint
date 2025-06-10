import {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Payments} from '../../utils';
import {RootStackScreenProps} from '../../Navigations/types';
const width = Dimensions.get('window').width;
export default function ChoosePlatform({
  navigation,
  route,
}: RootStackScreenProps<'ChoosePlatform'>) {
  const {courseContext} = route.params;
  const {scale} = useWindowDimensions();
  const [paymentList, setPaymentList] = useState<
    {
      id: number;
      name: string;
      icon: string;
      country: string[];
    }[]
  >([]);

  useEffect(() => {
    setPaymentList([]);
    for (let index = 0; index < Payments.length; index++) {
      const element = Payments[index];
      for (let j = 0; j < element.country.length; j++) {
        const elements = element.country[j];
        if (elements === 'IN') {
          setPaymentList(prev => [...prev, element]);
        }
      }
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main_container}>
        <FlatList
          data={paymentList}
          removeClippedSubviews={false} 
          scrollEnabled={false}
          keyExtractor={({id}) => `payment-${id}`}
          renderItem={({item}) => {
            const {icon, id, name} = item;
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                    if (name === 'Stripe') {
                      Alert.alert('Learning Saint Alert', 'Comming Soon...', [
                        {
                          text: 'OK',
                          style: 'cancel',
                        },
                      ]);
                    } else {
                      navigation.navigate('PaymentForm', {
                        price: Number(courseContext.price.amount),
                        platform: name,
                        courseContext: courseContext,
                      });
                    }
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{
                      uri: icon,
                      cache: 'force-cache',
                      scale: scale,
                    }}
                    width={width * 0.15}
                    height={width * 0.15}
                    resizeMode="contain"
                    resizeMethod="resize"
                  />
                  <Text
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      fontSize: scale * 6,
                      color: '#333',
                    }}>
                    {name}
                  </Text>
                  <View>
                    <Text
                      style={{
                        marginRight: 10,
                        fontSize: scale * 6,
                        color: '#333',
                        fontWeight: '700',
                      }}>
                      {courseContext.price.currency}{' '}
                      {courseContext.price.amount}
                    </Text>
                  </View>
                  <AntDesign name="right" />
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main_container: {
    width: width * 0.9,
    margin: 'auto',
  },
});
