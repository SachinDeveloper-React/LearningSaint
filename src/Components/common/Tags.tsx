import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  label: string;
  onClose: () => void;
};
const Tag = ({label, onClose}: Props) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>{label}</Text>
      <TouchableOpacity onPress={onClose}>
        <Ionicons name="close" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00BFFF', // Light blue background
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  tagText: {
    color: 'white',
    fontSize: 14,
    marginRight: 5,
  },
});

export default Tag;
