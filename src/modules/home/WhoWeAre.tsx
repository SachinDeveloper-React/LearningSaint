import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {Button, Header, InfoSection} from '../../Components';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const WhoWeAre = (props: Props) => {
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
      <Header title="Who We Are" />
      <View style={styles.content}>
        <Text style={styles.introText}>We Offer The Best Carrier</Text>
        <InfoSection
          byUrlImage={true}
          icon="https://www.learningsaint.com/assets/images/icons/student.png" // Replace with your icon path
          title="Industry Expert Instructor"
          description="They have hands-on experience in the industry they teach about. This practical experience often comes from working in the field for a substantial amount of time."
        />
        <InfoSection
          byUrlImage={true}
          icon="https://www.learningsaint.com/assets/images/icons/book.png" // Replace with your icon path
          title="Up-to-Date Course Content"
          description="Stay connected with industry professionals and organizations to remain aware of the latest trends, practices, and technologies relevant to the course."
        />
        <InfoSection
          byUrlImage={true}
          icon="https://www.learningsaint.com/assets/images/icons/reward.png" // Replace with your icon path
          title="Legal and Ethical Considerations"
          description="Ensure that any changes or updates to course content comply with copyright laws, licensing agreements, and ethical standards."
        />
        <Button
          style={{
            padding: 6,
            width: width * 0.4,
          }}
          title="Know More"
          onPress={() => {
            navigate('AboutScreen');
          }}
        />
      </View>
    </View>
  );
};

export default WhoWeAre;

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
