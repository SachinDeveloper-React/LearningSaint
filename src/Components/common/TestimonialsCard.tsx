import {
    Animated,
    Image,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React from 'react';
  import Header from './Header';
  import {Colors} from '../../lib';
  
  type Props = {
    translateY: any;
    id: number;
    img: string;
    name: string;
    designation: string;
    review: string;
  };
  
  const TestimonialsCard = (props: Props) => {
    const {translateY, designation, id, img, name, review} = props;
    const {width} = useWindowDimensions();
  
    const imageSource = typeof img === 'string' ? {uri: img} : img;
  
    return (
      <Animated.View
        style={{
          position: 'relative',
          backgroundColor: '#fff5f3',
          // backgroundColor: "red",
          width: width * 0.6,
          marginHorizontal: 10,
          marginVertical: 20,
          padding: 20,
          transform: [
            {
              translateY: translateY,
            },
          ],
        }}>
        <View
          shouldRasterizeIOS
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <View>
            <Image
              source={{cache: 'force-cache', ...imageSource}}
              // source={img}
              resizeMode="contain"
              width={width * 0.1}
              height={width * 0.1}
            />
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Header title={name} />
            <Text
              numberOfLines={2}
              style={{
                color: Colors.dark.tabIconSelected,
                flexWrap: 'wrap',
              }}>
              {designation}
            </Text>
          </View>
        </View>
  
        <View style={styles.description_container}>
          <Text style={styles.description}>{review}</Text>
          <Text>⭐️⭐️⭐️⭐️⭐️</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: -width * 0.07,
            left: width * 0.07,
            borderTopWidth: width * 0.07,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: width * 0.07,
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: '#fff5f3',
            transform: [
              {
                rotate: '90deg',
              },
            ],
          }}
        />
      </Animated.View>
    );
  };
  
  export default TestimonialsCard;
  
  const styles = StyleSheet.create({
    description_container: {
      marginVertical: 10,
    },
    description: {
      marginBottom: 10,
      lineHeight: 22,
      color: Colors.default.dark,
    },
  });
  