import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ExpandableItem = ({
  title,
  content,
  onPressClassHandler,
  dynamicHeight,
  id,
  idShown = true,
  disabled = false,
  dynamicHeightEnable = true,
}: {
  title: string;
  content: any;
  onPressClassHandler: () => void;
  dynamicHeight: any;
  id: number;
  idShown?: boolean;
  disabled?: boolean;
  dynamicHeightEnable?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current; // Initial height is set to 0

  const toggleExpansion = () => {
    const initialValue = expanded ? 1 : 0;
    const finalValue = expanded ? 0 : 1;

    setExpanded(!expanded);

    animation.setValue(initialValue);

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300, // Duration of the animation
      useNativeDriver: false, // Native driver cannot be used for height animations
    }).start();
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, dynamicHeight], // Adjust the maximum height as per your content
  });

  return (
    <View>
      <TouchableOpacity
        onPress={onPressClassHandler}
        disabled={disabled}
        style={[styles.titleContainer, styles.headerContainer]}>
        <View style={styles.headerContainer}>
          {idShown && (
            <Text
              style={[
                styles.titleText,
                {
                  marginRight: 5,
                },
              ]}>
              {id + 1}.
            </Text>
          )}
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={toggleExpansion}>
          <Ionicons
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.contentContainer,
          dynamicHeightEnable && {height: heightInterpolate},
        ]}>
        <View>{content}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: '#000',
    fontWeight: 'bold',
    // flex: 0.8,
  },
  contentContainer: {
    overflow: 'hidden',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
  },
  contentText: {
    paddingVertical: 10,
  },
});

export default ExpandableItem;
