import {
    Animated,
    FlatListProps,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
    FlatList,
  } from 'react-native';
  import React, {useRef} from 'react';
  import {Paginator} from '../common';
  
  type Props = {
    arrayList: any;
    renderItem: ({item}: any) => any;
  };
  
  interface CustomFlatListProps<ItemT> extends FlatListProps<ItemT> {
    // Add any custom props here, e.g.:
    customHeader?: React.ReactNode;
    customFooter?: React.ReactNode;
    data: any;
  }
  
  // const HorizontalWithPaging = <ItemT,>({
  //   customHeader,
  //   customFooter,
  //   ...rest
  // }: CustomFlatListProps<ItemT>) => {
  //   const {width, scale} = useWindowDimensions();
  //   const animatedPaging = useRef(new Animated.Value(0)).current;
  //   return (
  //     <View>
  //       <Animated.FlatList
  //         {...rest}
  //         horizontal
  //         scrollEnabled={true}
  //         directionalLockEnabled
  //         snapToAlignment="center"
  //         snapToInterval={width}
  //         snapToStart
  //         initialNumToRender={1}
  //         showsHorizontalScrollIndicator={false}
  //         onScroll={Animated.event(
  //           [{nativeEvent: {contentOffset: {x: animatedPaging}}}],
  //           {useNativeDriver: false},
  //         )}
  //         decelerationRate={'fast'}
  //         keyExtractor={({id}: any) => `index-${id}`}
  //       />
  //       <Paginator data={rest?.data} scrollX={animatedPaging} />
  //     </View>
  //   );
  // };
  
  const HorizontalWithPaging = React.forwardRef(
    <ItemT,>(
      {customHeader, customFooter, ...rest}: CustomFlatListProps<ItemT>,
      ref: any,
    ) => {
      const {width, scale} = useWindowDimensions();
      const animatedPaging = useRef(new Animated.Value(0)).current;
      return (
        <>
          <View>
            <Animated.FlatList
            removeClippedSubviews={false} 
              ref={ref}
              {...rest}
              horizontal
              scrollEnabled={true}
              directionalLockEnabled
              snapToAlignment="center"
              snapToInterval={width}
              snapToStart
              initialNumToRender={1}
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: animatedPaging}}}],
                {useNativeDriver: false},
              )}
              decelerationRate={'fast'}
              keyExtractor={({id}: any) => `index-${id}`}
            />
            <Paginator data={rest?.data} scrollX={animatedPaging} />
          </View>
        </>
      );
    },
  );
  
  export default HorizontalWithPaging;
  
  const styles = StyleSheet.create({});
  