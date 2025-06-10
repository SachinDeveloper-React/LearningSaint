import {
    Animated,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React, {Fragment, useRef} from 'react';
  import {Header, TestimonialsCard} from '../../Components';
  import {Colors, Size} from '../../lib';
  
  type Props = {
    testimonialsReview: {
      id: number;
      img: string;
      name: string;
      designation: string;
      review: string;
    }[];
  };
  
  const Testimonials = (props: Props) => {
    const {testimonialsReview} = props;
    const {width} = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
      <SafeAreaView>
        <Header title="Testimonials" />
        <Text style={styles.sub_heading}>
          What Our Learners Have To Say About Us
        </Text>
  
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={false} 
          horizontal
          data={testimonialsReview}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={
            {
              // alignItems: 'center',
            }
          }
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: true,
            },
          )}
          decelerationRate={0}
          bounces={false}
          snapToInterval={width * 0.6}
          renderItem={({item, index}) => {
            const inputRange = [
              (index - 1) * width * 0.6,
              index * width * 0.6,
              (index + 1) * width * 0.6,
            ];
            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -20, 0],
            });
            return (
              <Fragment>
                <TestimonialsCard {...item} translateY={translateY} />
              </Fragment>
            );
          }}
        />
      </SafeAreaView>
    );
  };
  
  export default Testimonials;
  
  const styles = StyleSheet.create({
    sub_heading: {
      marginTop: 5,
      marginBottom: 10,
      fontSize: Size.fontSize.md_16,
      color: Colors.default.dark,
    },
  });
  