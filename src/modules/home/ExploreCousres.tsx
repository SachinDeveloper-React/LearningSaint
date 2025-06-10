import {
    Alert,
    StyleSheet,
    Text,
    useColorScheme,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {Colors, Size} from '../../lib';
  import Entypo from 'react-native-vector-icons/Entypo';
  
  import {Button, ModelPicker , SelectQueriesContent} from '../../Components';
  
  import {courseCategories, domain, hightest_qulification} from '../../utils';
  import {useNavigation} from '@react-navigation/native';
  
  type Props = {
    courses: {
      header_title: string;
      id: number;
      item: {
        edu_meta: {
          icon: string;
          iconSettings: string;
          id: number;
          title: string;
        }[];
        guaranteed: {title: string; url: string};
        id: number;
        image: string;
        navigate: string;
        price: {
          amount: number;
          amount_title: string;
          currency: string;
          currencySign: string;
        };
        rating: {rating_count: number};
        tag: string[];
        title: string;
        url: string;
      }[];
      right_title: string;
    }[];
    isActive: boolean;
  };
  
  const ExploreCourses = (props: Props) => {
    const {courses, isActive} = props;
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const {width} = useWindowDimensions();
    const isLargeScreen = width >= 768;
    const [isModalVisible, setModalVisible] = useState({
      domain: false,
      domainActiveList: [
        {
          id: '1',
          name: 'Select Your Courses Categories',
          selectColor: '',
          isChecked: true,
        },
      ],
      domainAllList: courseCategories,
      hightest_qulification: false,
      hightest_qulificationActiveList: [
        {
          id: '1',
          name: 'Select your highest qualification',
          selectColor: '',
          isChecked: true,
        },
      ],
      hightest_qulificationAllList: hightest_qulification,
    });
    const [stringSentance, setStringSentance] = useState({
      domain: '',
      hightest_qulification: '',
    });
  
    useEffect(() => {
      setStringSentance({
        ...stringSentance,
        domain: `${isModalVisible.domainActiveList[0].name} ${
          isModalVisible.domainActiveList.length - 1 === 0
            ? ''
            : `+${isModalVisible.domainActiveList.length - 1}`
        }`,
        hightest_qulification: `${
          isModalVisible.hightest_qulificationActiveList[0].name
        } ${
          isModalVisible.hightest_qulificationActiveList.length - 1 === 0
            ? ''
            : `+${isModalVisible.hightest_qulificationActiveList.length - 1}`
        }`,
      });
    }, [isModalVisible]);
  
    const exploreHandler = () => {
      if (
        isModalVisible.domainActiveList[0].name !==
        'Select Your Courses Categories'
      ) {
        navigation.navigate('CoursesListScreen', {
          allCourses: courses,
          filterdCoursestype: isModalVisible.domainActiveList,
        });
      } else {
        Alert.alert('Please select your courses categories');
      }
    };
    const handler = () => {
      if (isActive) {
        Alert.alert(
          'Learning Saint Alert',
          'We are facing a some issue. Please try again after some time.',
          [
            {
              text: 'Ok',
              style: 'cancel',
            },
          ],
        );
      } else {
        exploreHandler();
      }
    };
    return (
      <View
        style={[
          styles.exploreContainer,
          {
            backgroundColor: 'transparent',
            width: isLargeScreen ? width * 0.7 : width,
            marginBottom: 5,
          },
        ]}>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text style={[styles.exploreContainer_header_text]}>500+ Courses.</Text>
          <Text style={styles.exploreContainer_header_text}>
            50+ Specialisations.
          </Text>
  
          <Text
            style={[
              styles.exploreContainer_header_text,
              {
                color: Colors.light.text,
              },
            ]}>
            Upskill and Transform Your Career!
          </Text>
        </View>
        <View style={styles.exploreContainer_container_list}>
          <Text
            style={[
              styles.exploreContainer_list,
              {
                color: Colors[colorScheme ?? 'light'].default,
              },
            ]}>
            Degree
          </Text>
          <Entypo name="dot-single" color={Colors[colorScheme ?? 'light'].tint} />
          <Text
            style={[
              styles.exploreContainer_list,
              {
                color: Colors[colorScheme ?? 'light'].default,
              },
            ]}>
            Certification
          </Text>
          <Entypo name="dot-single" color={Colors[colorScheme ?? 'light'].tint} />
          <Text
            style={[
              styles.exploreContainer_list,
              {
                color: Colors[colorScheme ?? 'light'].default,
              },
            ]}>
            Bootcamps
          </Text>
          <Entypo name="dot-single" color={Colors[colorScheme ?? 'light'].tint} />
          <Text
            style={[
              styles.exploreContainer_list,
              {
                color: Colors[colorScheme ?? 'light'].default,
              },
            ]}>
            Study Abroad
          </Text>
        </View>
        <View>
          <ModelPicker
            title="All Domain"
            active={isModalVisible?.domain}
            fullState={isModalVisible}
            setActive={setModalVisible}
            types_config={'domain'}
            pickerTitle={stringSentance.domain}>
            <SelectQueriesContent
              data={isModalVisible.domainAllList}
              onPress={item => {
                const filterActiveItem = item.filter(
                  item => item.isChecked === true,
                );
                setModalVisible({
                  ...isModalVisible,
                  domain: false,
                  domainAllList: item,
                  domainActiveList: filterActiveItem,
                });
              }}
              clearPress={() => {
                setModalVisible({
                  ...isModalVisible,
                  domainActiveList: [
                    {
                      id: '1',
                      name: 'Select Your Courses Categories',
                      selectColor: '',
                      isChecked: true,
                    },
                  ],
                });
              }}
            />
          </ModelPicker>
          {/* <ModalPicker
            title="Highest Qualification"
            active={isModalVisible?.hightest_qulification}
            setActive={setModalVisible}
            fullState={isModalVisible}
            types_config={'hightest_qulification'}
            pickerTitle={stringSentance.hightest_qulification}>
            <SelectQueriesContent
              data={isModalVisible.hightest_qulificationAllList}
              onPress={item => {
                const filterActiveItem = item.filter(
                  item => item.isChecked === true,
                );
                setModalVisible({
                  ...isModalVisible,
                  hightest_qulification: false,
                  hightest_qulificationAllList: item,
                  hightest_qulificationActiveList: filterActiveItem,
                });
              }}
              clearPress={() => {
                setModalVisible({
                  ...isModalVisible,
                  hightest_qulificationActiveList: [
                    {
                      id: '1',
                      name: 'Select your highest qualification',
                      selectColor: '',
                      isChecked: true,
                    },
                  ],
                });
              }}
            />
          </ModalPicker> */}
        </View>
  
        <Button
          title="Explore Courses"
          style={{
            paddingVertical: 10,
          }}
          onPress={handler}
          disabled={false}
        />
      </View>
    );
  };
  
  export default ExploreCourses;
  
  const styles = StyleSheet.create({
    exploreContainer: {
      padding: Size.padding.llg_24,
      margin: 'auto',
    },
    exploreContainer_header_text: {
      fontSize: Size.fontSize.md_16,
      color: Colors.dark.tint,
      fontWeight: '500',
    },
    exploreContainer_container_list: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    exploreContainer_list: {
      fontSize: Size.fontSize.xls_10,
    },
    padding: {
      padding: Size.padding.xls_10,
    },
  });
  