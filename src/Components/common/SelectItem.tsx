import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';
  import React from 'react';
  import {Colors} from '../../lib';
  import Octicons from 'react-native-vector-icons/Octicons';
  
  type Props = {
    title: string;
    onPress?: () => void;
    active?: boolean;
  };
  
  const SelectItem = (props: Props) => {
    const {title, onPress, active = false} = props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginBottom: 5,
        }}>
        <View
          style={[
            styles.checkbox,
            {
              backgroundColor: active ? Colors.dark.tint : 'transparent',
              borderColor: active ? Colors.dark.tint : Colors.default.dark,
            },
          ]}>
          <Octicons name="check" size={10} color={'#fff'} />
        </View>
        <Text
          lineBreakMode="clip"
          lineBreakStrategyIOS="standard"
          style={{
            flex: 1,
            color: Colors.default.dark,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  
  export default SelectItem;
  
  const styles = StyleSheet.create({
    checkbox: {
      borderWidth: 0.5,
      width: 15,
      height: 15,
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  