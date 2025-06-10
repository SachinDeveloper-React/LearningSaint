import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React, {useEffect, useRef} from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  import {HorizontalWithPaging} from '../../Components';
  import {banners} from '../../utils';
  import {Colors} from '../../lib';
  
  type Props = {};
  
  const Banners = (props: Props) => {
    const {width, scale} = useWindowDimensions();
    const flatListRef = useRef<FlatList>(null);
    let index = 0;
    const totalIndex = banners.length - 1;
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (flatListRef?.current) {
          if (index <= totalIndex) {
            flatListRef?.current.scrollToIndex({
              animated: true,
              index: index,
              viewPosition: index,
              viewOffset: 0,
            });
            index++;
          } else {
            flatListRef?.current.scrollToIndex({animated: true, index: 0});
            index = 0;
          }
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    return (
      <LinearGradient
        colors={['white', '#e58c57']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 2}}>
        <HorizontalWithPaging
          ref={flatListRef}
          data={banners}
          renderItem={({item}: any) => {
            return (
              <View
                style={{
                  width: width,
                }}>
                <View
                  style={{
                    width: width * 0.9,
                    margin: 'auto',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: width / 2,
                      }}>
                      <Text
                        style={{
                          textTransform: 'uppercase',
                          fontSize: 8,
                          fontWeight: '800',
                          color: '#ff9900',
                          marginBottom: 5,
                        }}>
                        {item?.pre_title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '900',
                          color: '#333',
                          marginBottom: 15,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 8,
                          fontWeight: '500',
                          color: Colors.default.dark,
                        }}>
                        {item.description}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: width / 2,
                        height: width * 0.4,
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={{
                          cache: 'force-cache',
                          scale: scale,
                          uri: item.img,
                        }}
                        width={width / 2}
                        height={width * 0.3}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </LinearGradient>
    );
  };
  
  export default Banners;
  
  const styles = StyleSheet.create({});
  