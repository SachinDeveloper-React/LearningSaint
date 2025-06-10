import {
  Alert,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
type Props = {
  shareText: string;
};

const ShareButton = (props: Props) => {
  const {shareText} = props;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: shareText,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onShare}>
      <Entypo name="dots-three-vertical" size={20} />
    </TouchableOpacity>
  );
};

export default ShareButton;

const styles = StyleSheet.create({});
