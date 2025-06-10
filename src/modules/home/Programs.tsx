import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import {Colors, Size} from '../../lib';
import {CourseCard, Header} from '../../Components';

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
};

const Programs = (props: Props) => {
  const {courses} = props;
  return (
    <View style={styles.our_programs}>
      <Header title="Our Programs" />

      <View>
        <FlatList
          data={courses}
          removeClippedSubviews={false} 
          scrollEnabled={false}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => {
            return (
              <Fragment key={item.id}>
                <Text
                  style={[
                    styles.sub_heading,
                    {
                      color: Colors.default.dark,
                    },
                  ]}>
                  {item.header_title}
                </Text>

                <FlatList
                  horizontal
                  removeClippedSubviews={false} 
                  alwaysBounceHorizontal={true}
                  data={item.item}
                  bounces={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    gap: 10,
                  }}
                  renderItem={({item}) => {
                    return <CourseCard {...item} />;
                  }}
                  keyExtractor={item => item.id.toString()}
                />
              </Fragment>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Programs;

const styles = StyleSheet.create({
  our_programs: {
    padding: Size.padding.xls_10,
  },
  title: {
    fontSize: Size.fontSize.lmd_18,
    fontWeight: '700',
    color: '#000',
    marginVertical: Size.margin.xxs_4,
  },
  sub_heading: {
    fontSize: Size.fontSize.md_16,
    fontWeight: '500',
    color: '#000',
    marginVertical: Size.margin.xls_10,
  },
});
