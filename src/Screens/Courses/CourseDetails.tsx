import {StyleSheet} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {RootStackScreenProps} from '../../Navigations/types';

const CourseDetails = ({
  navigation,
  route,
}: RootStackScreenProps<'CourseDetails'>) => {
  const {params} = route;

  return (
    <WebView
      source={{
        uri: params.courseURL,
      }}
      style={{flex: 1}}
    />
  );
};

export default CourseDetails;

const styles = StyleSheet.create({});
