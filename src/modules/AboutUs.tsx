import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import {Button, Header, InfoSection} from '../Components';
import {useNavigation} from '@react-navigation/native';

const AboutUs = () => {
  const {navigate} = useNavigation();
  const {width} = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          width: width * 0.95,
          marginHorizontal: 'auto',
        },
      ]}>
      <Header title="About Us" />
      <View style={styles.content}>
        <Text style={styles.introText}>
          Welcome aboard Learning Saint- Your Path to Expertise and Excellence.
          We are driven by a profound belief in the transformative power of
          education.
        </Text>
        <InfoSection
          icon={require('../assets/image/university.png')} // Replace with your icon path
          title="Vision"
          description="Learning Saint envisions a world where education knows no boundaries. Our mission is to break down barriers and provide equitable access to exceptional learning experiences."
        />
        <InfoSection
          icon={require('../assets/image/university.png')} // Replace with your icon path
          title="Mission"
          description="Learning Saint thrives with the mission to offer students a risk-free educational journey that empowers them to unlock their full potential. We are dedicated to providing a secure and nurturing learning environment where students can explore their capabilities and thrive."
        />
        <Button
          style={{
            padding: 6,
            width: width * 0.4,
          }}
          title="Know About Us"
          onPress={() => {
            navigate('AboutScreen');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  content: {
    // paddingHorizontal: 20,
  },
  introText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
});

export default AboutUs;
