import {
    SafeAreaView,
    ScrollView,
    ScrollViewProps,
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
  } from 'react-native';
  import React, {ReactNode} from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  
  type CustomProps = ScrollViewProps & {
    children: ReactNode;
    safeAreaStyle?: StyleProp<ViewStyle>;
    scrollViewStyle?: StyleProp<ViewStyle>;
    srcoll?: boolean;
  };
  
  const BackgroundWrapper = (props: CustomProps) => {
    const {children, safeAreaStyle, scrollViewStyle, srcoll = true} = props;
    return (
      // <LinearGradient
      //   colors={['white', '#e58c57']}
      //   style={{
      //     flex: 1,
      //   }}
      //   start={{x: 0, y: 0}}
      //   end={{x: 1, y: 2}}>
      <SafeAreaView
        style={[
          safeAreaStyle,
          {
            flex: 1,
            backgroundColor: '#fff',
          },
        ]}>
        {srcoll ? (
          <ScrollView
            {...props}
            style={[
              scrollViewStyle,
              {
                flex: 1,
              },
            ]}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={true}
            // decelerationRate={'fast'}
          >
            {children}
          </ScrollView>
        ) : (
          children
        )}
      </SafeAreaView>
      // </LinearGradient>
    );
  };
  
  export default BackgroundWrapper;
  
  const styles = StyleSheet.create({});
  