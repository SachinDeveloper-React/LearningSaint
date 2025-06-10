import {Image, ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useHomeService} from '../../hooks';
import {
  AboutUs,
  ArticalList,
  Banner,
  KeyFeaturesOrLearnerBenefits,
  LearnerBenefit,
  Programs,
  Testimonials,
  UniversityPartner,
  WhoWeAre,
} from '../../modules';
import {ExploreCousres} from '../../modules';
import {BackgroundWrapper, Loader} from '../../Components';
import {HiringPartner} from '../../modules';
import {testimonialsReview} from '../../utils';
import {RootStackScreenProps} from '../../Navigations/types';

type Props = {};

const HomeScreens = ({navigation, route}: RootStackScreenProps<'Home'>) => {
  // const [homeContent] = useHomeService({});

  return (
    <BackgroundWrapper>
      <Banner />
      <UniversityPartner />
      {/* <ExploreCousres
        courses={homeContent.courses}
        isActive={homeContent.error ? true : false}
      />

      {homeContent.isLoading ? (
        <Loader />
      ) : (
        <Programs courses={homeContent.typeCourses} />
      )} */}

      <KeyFeaturesOrLearnerBenefits />
      {/* <ArticalList blogs={homeContent.blogs} /> */}
      {/* <HiringPartner />
      <AboutUs />
      <LearnerBenefit />
      <WhoWeAre /> */}
      <Button
        title="Youtube"
        onPress={() => navigation.navigate('YouTubeVideo')}
      />
      {/* <View
        style={{
          padding: 10,
        }}>
        <Testimonials testimonialsReview={testimonialsReview} />
      </View> */}
    </BackgroundWrapper>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({});
