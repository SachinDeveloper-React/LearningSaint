import {Alert, FlatList, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackScreenProps} from '../../Navigations/types';
import {course} from '../../utils';
import {CourseCard, Tags , CourseCard2} from '../../Components';
import {Colors} from '../../lib';
import {useMMKVString} from 'react-native-mmkv';

type Props = {};

const CoursesListScreen = ({
  navigation,
  route,
}: RootStackScreenProps<'CoursesListScreen'>) => {
  const {width} = useWindowDimensions()
  const [token, setToken] = useMMKVString('@token');
  const [filteredCourses, setFilteredCourses] = useState<course[]>([]);
  const {allCourses, filterdCoursestype} = route.params;
  useEffect(() => {
    if (filteredCourses.length <= 0) {
      for (let i = 0; i < allCourses.length; i++) {
        const element = allCourses[i];
        for (let j = 0; j < filterdCoursestype.length; j++) {
          const element2 = filterdCoursestype[j];

          if (element.categories === element2.name) {
            setFilteredCourses(prev => [...prev, element]);
          }
        }
      }
    }
  }, []);

  const handlePress = (
    image: string,
    title: string,
    price: {
      amount: number;
      amount_title: string;
      currency: string;
      currencySign: string;
    },
    url: string,
  ) => {
    if (token) {
      Alert.alert(
        'Learning Saint Alert',
        'Select OK if you want to proceed with payment',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('ChoosePlatform', {
                courseContext: {
                  image: image,
                  title: title,
                  price: price,
                  url: url,
                },
              });
            },
          },
        ],
      );
    } else {
      Alert.alert('Learning Saint Alert', 'Please Login to proceed payment.', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Login',
          onPress: () => navigation.navigate('LoginScreen'),
        },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
      removeClippedSubviews={false} 
        data={filteredCourses}
        contentContainerStyle={{padding: 20}}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={width > 500 ? 2 : 1}
        ListHeaderComponent={() => {
          return (
            <View style={{marginBottom: 20}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginBottom: 10,
                  color: Colors.default.dark,
                }}>
                Coureses List By Filter
              </Text>
              <FlatList
                data={filterdCoursestype}
                removeClippedSubviews={false} 
                horizontal={true}
                keyExtractor={(_, i) => i.toString()}
                contentContainerStyle={{
                  paddingVertical: 5,
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({index, item}) => {
                  return <Tags label={item.name} onClose={() => true} />;
                }}
              />
            </View>
          );
        }}
        renderItem={({index, item}) => {
          const {image, edu_meta, price, rating, title, url} = item;
          return (
            <View style={{
              width: width > 500 ? (width / 2) - 20 : width - 40,
              paddingHorizontal:width > 500 ? 5: 0
            }}>
            <CourseCard2
              imageUrl={image}
              duration={edu_meta[0].title}
              mode={edu_meta[1].title}
              title={title}
              rating={rating.rating_count}
              price={price.amount}
              onPress={() => handlePress(image, title, price, url)}
            />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CoursesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default.light,
  },
});
