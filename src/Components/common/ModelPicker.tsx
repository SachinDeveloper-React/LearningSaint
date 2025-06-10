import React, {useState, useRef, useEffect, memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
  Dimensions,
  Pressable,
  useColorScheme,
} from 'react-native';
import {Colors, Size} from '../../lib';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

type PROPS = {
  children: React.ReactNode;
  pickerTitle?: string;
  title: string;
  rightIcon?: string | any;
  active: boolean;
  setActive?: any;
  fullState?: any;
  types_config: string;
};
const ModalPicker = (props: PROPS) => {
  const {
    children,
    pickerTitle,
    title,
    rightIcon = 'keyboard-arrow-down',
    active,
    setActive,
    fullState,
    types_config,
  } = props;

  const colorScheme = useColorScheme();
  const [isModalVisible, setModalVisible] = useState(active);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isModalVisible) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isModalVisible]);

  const toggleModal = () => {
    setActive({...fullState, [types_config]: true});
    setModalVisible(!isModalVisible);
  };

  const modalTranslateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT, 0],
  });

  useEffect(() => {
    setModalVisible(active);
  }, [active]);
  return (
    <View style={styles.container}>
      <Pressable onPress={toggleModal}>
        <View
          role="button"
          aria-label="piker button"
          shouldRasterizeIOS
          style={{
            borderWidth: 0.5,
            padding: 10,
            borderRadius: 5,
            borderCurve: 'circular',
            borderColor: Colors[colorScheme ?? 'light'].default,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: Size.fontSize.xls_10,
              color: Colors.default.dark,
            }}>
            {pickerTitle}
          </Text>
          <MaterialIcons
            name={rightIcon}
            size={20}
            color={Colors.default.dark}
          />
        </View>
      </Pressable>

      <Modal
        transparent
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={toggleModal}>
        <TouchableOpacity style={styles.backdrop} onPress={toggleModal} />
        <Animated.View
          style={[
            styles.modalContainer,
            {transform: [{translateY: modalTranslateY}]},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: Colors.default.dark,
              }}>
              {title}
            </Text>
            <Octicons
              color="#ff660a"
              size={20}
              name={'x'}
              onPress={toggleModal}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#ccc',
            }}
          />
          {children}
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: SCREEN_HEIGHT * 0.8,
  },
  modalContent: {
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default memo(ModalPicker);
