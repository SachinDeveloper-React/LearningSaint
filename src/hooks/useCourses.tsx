import React, {useContext, useEffect, useState} from 'react';
import {
  blogsService,
  coursePriceService,
  fetchLocationService,
} from '../services';

import {countryCode, countryName, LocationType,allCourses} from '../utils';
import {useMMKVObject} from 'react-native-mmkv';
import {NetworkContext} from '../Context';

type Props = {};

const defaultLocation = {
  city: {
    geoname_id: 5809844,
    names: {
      de: 'Seattle',
      en: 'Seattle',
      es: 'Seattle',
      fr: 'Seattle',
      ja: 'シアトル',
      'pt-BR': 'Seattle',
      ru: 'Сиэтл',
    },
  },
  continent: {
    code: 'NA',
    geoname_id: 6255149,
    names: {
      de: 'Nordamerika',
      en: 'North America',
      es: 'Norteamérica',
      fr: 'Amérique du Nord',
      ja: '北アメリカ',
      'pt-BR': 'América do Norte',
      ru: 'Северная Америка',
      'zh-CN': '北美洲',
    },
  },
  country: {
    geoname_id: 6252001,
    iso_code: 'US',
    names: {
      de: 'Vereinigte Staaten',
      en: 'United States',
      es: 'Estados Unidos',
      fr: 'États Unis',
      ja: 'アメリカ',
      'pt-BR': 'EUA',
      ru: 'США',
      'zh-CN': '美国',
    },
  },
  location: {
    accuracy_radius: 1000,
    latitude: 47.6034,
    longitude: -122.3414,
    metro_code: 819,
    time_zone: 'America/Los_Angeles',
  },
  postal: {
    code: '98160',
  },
  registered_country: {
    geoname_id: 6252001,
    iso_code: 'US',
    names: {
      de: 'Vereinigte Staaten',
      en: 'United States',
      es: 'Estados Unidos',
      fr: 'États Unis',
      ja: 'アメリカ',
      'pt-BR': 'EUA',
      ru: 'США',
      'zh-CN': '美国',
    },
  },
  subdivisions: [
    {
      geoname_id: 5815135,
      iso_code: 'WA',
      names: {
        en: 'Washington',
        es: 'Washington',
        fr: 'Washington',
        ja: 'ワシントン州',
        ru: 'Вашингтон',
        'zh-CN': '华盛顿州',
      },
    },
  ],
  traits: {
    ip_address: '00.00.00.000',
    prefix_len: 22,
  },
};
const useCourses = (props: Props) => {
  const [location, setLocation] = useMMKVObject<LocationType>('@location');
  const [fullLocationDetail, setFullLocationDetail] = useMMKVObject(
    '@fullLocationDetail',
  );
  const {isConnected, setIsConnected} = useContext(NetworkContext);
  const [courseData, setCourseData] = useState<{
    isLoading: boolean;
    courses: any[];
    error: string;
    typeCourses: any[];
  }>({
    isLoading: false,
    courses: allCourses,
    error: '',
    typeCourses: [],
  });

  const topRatedCourses = (data: any, key: string) => {
    const array = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      for (let j = 0; j < element.tag.length; j++) {
        const elements = element.tag[j];
        if (elements === key) {
          array.push(element);
        }
      }
    }

    return array;
  };

  const fetchCourses = async () => {
    try {
      setCourseData({...courseData, ['isLoading']: true});
      const location = await fetchLocationService();

      if (location.isError) {
        setFullLocationDetail(defaultLocation);
        setLocation({
          countryCode: countryCode[1],
          countryName: countryName[1],
          currencyCode: 'USD',
          currencySymbol: '$',
          flag: 'https://www.learningsaint.com/assets/images/flags/us.webp',
        });
      }
      const result = location.data;
      setFullLocationDetail(result);
      setLocation({
        countryCode: countryCode.includes(result?.country?.iso_code)
          ? result?.country?.iso_code
          : countryCode[1],
        countryName: countryName.includes(result?.country?.names?.en)
          ? result?.country?.names?.en
          : countryName[1],
        currencyCode:
          result?.country?.iso_code === 'IN'
            ? 'INR'
            : result?.country?.iso_code === 'US'
            ? 'USD'
            : result?.country?.iso_code === 'AU'
            ? 'AUD'
            : result?.country?.iso_code === 'GB'
            ? 'GBP'
            : result?.country?.iso_code === 'CA'
            ? 'CAD'
            : result?.country?.iso_code === 'SE'
            ? 'SEK'
            : 'USD',
        currencySymbol:
          result?.country?.iso_code === 'IN'
            ? '₹'
            : result?.country?.iso_code === 'US'
            ? '$'
            : result?.country?.iso_code === 'AU'
            ? '$'
            : result?.country?.iso_code === 'GB'
            ? '£'
            : result?.country?.iso_code === 'CA'
            ? '$'
            : result?.country?.iso_code === 'SE'
            ? 'kr'
            : '$',
        flag:
          result?.country?.iso_code === 'IN'
            ? 'https://www.learningsaint.com/assets/images/flags/in.webp'
            : result?.country?.iso_code === 'US'
            ? 'https://www.learningsaint.com/assets/images/flags/us.webp'
            : result?.country?.iso_code === 'AU'
            ? 'https://www.learningsaint.com/assets/images/flags/au.webp'
            : result?.country?.iso_code === 'GB'
            ? 'https://www.learningsaint.com/assets/images/flags/gb.webp'
            : result?.country?.iso_code === 'CA'
            ? 'https://www.learningsaint.com/assets/images/flags/ca.webp'
            : result?.country?.iso_code === 'SE'
            ? 'https://www.learningsaint.com/assets/images/flags/se.webp'
            : 'https://www.learningsaint.com/assets/images/flags/us.webp',
      });

      const responses = await Promise.all([
        coursePriceService(),
        blogsService(),
      ]);
      const courses = await responses[0].data;
      const blogs = await responses[1].data;

      if (courses.isError) {
        setCourseData({
          ...courseData,
          ['isLoading']: false,
          ['error']: courses.message,
        });
      } else {
        for (let i = 0; i < courses?.response?.data?.length; i++) {
          const elementOfi = courses?.response?.data[i];
          for (let j = 0; j < courseData.courses.length; j++) {
            const elementOfj = courseData.courses[j];
            if (
              elementOfi.currency ===
                (result?.country?.iso_code === 'IN'
                  ? 'INR'
                  : result?.country?.iso_code === 'US'
                  ? 'USD'
                  : result?.country?.iso_code === 'AU'
                  ? 'AUD'
                  : result?.country?.iso_code === 'GB'
                  ? 'GBP'
                  : result?.country?.iso_code === 'CA'
                  ? 'CAD'
                  : result?.country?.iso_code === 'SE'
                  ? 'SEK'
                  : 'USD') &&
              elementOfi.course_name === elementOfj.url
            ) {
              elementOfj.price.amount = elementOfi.price;
              elementOfj.price.amount_title = elementOfi.price.toString();
              elementOfj.price.currency = elementOfi.currency;
              elementOfj.price.currencySign =
                elementOfi.currency === 'INR' ? '₹' : '$';
            }
          }
        }

        for (let k = 0; k < courseData?.courses.length; k++) {
          const element = courseData?.courses[k];
          for (let l = 0; l < courses?.response?.data?.length; l++) {
            const responseElement = courses?.response?.data[l];

            if (
              element.price.amount === 0 &&
              element.url === responseElement.course_name &&
              responseElement.currency === 'USD'
            ) {
              element.price.amount = responseElement.price;
              element.price.amount_title = responseElement.price.toString();
              element.price.currency = responseElement.currency;
              element.price.currencySign = '$';
            }
          }
        }

        const topRated = topRatedCourses(
          courseData.courses,
          'Top-Rated Courses',
        );
        const saperpCourse = topRatedCourses(
          courseData.courses,
          'SAP ERP Courses',
        );
        const dpCourse = topRatedCourses(courseData.courses, 'Degree Program');
        const pgpCourse = topRatedCourses(
          courseData.courses,
          'Post Graduate Programs',
        );

        setCourseData({
          ...courseData,
          error: '',
          ['isLoading']: false,
          ['courses']: courseData.courses,
          ['typeCourses']: [
            {
              id: 1,
              header_title: 'Top-Rated Courses',
              right_title: 'View All',
              item: topRated,
            },
            {
              id: 2,
              header_title: 'Degree Programs',
              right_title: 'View All',
              item: dpCourse,
            },
            {
              id: 3,
              header_title: 'SAP ERP Courses',
              right_title: 'View All',
              item: saperpCourse,
            },
            {
              id: 4,
              header_title: 'Post Graduate Programs',
              right_title: 'View All',
              item: pgpCourse,
            },
          ],
        });
      }
    } catch (err) {
      console.log('Error fetching courses', err);
      setCourseData({
        ...courseData,
        ['isLoading']: false,
        ['error']: 'Error fetching courses',
      });
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [isConnected]);
  return [courseData];
};

export default useCourses;
