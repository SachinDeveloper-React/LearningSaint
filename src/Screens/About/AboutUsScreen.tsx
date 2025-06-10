import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import {Header, InfoSection} from '../../Components';
import {Colors, Size} from '../../lib';
import {Testimonials} from '../../modules';
import {testimonialsAbout, testimonialsReview} from '../../utils';

const AboutUsScreen = () => {
  const {width, scale} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.main_container,
            {
              width: width * 0.9,
              marginHorizontal: 'auto',
            },
          ]}>
          <Image
            source={{
              uri: 'https://www.learningsaint.com/assets/images/about/about-09/about-image-01.jpg',
              width: width * 0.9,
              height: 250,
              cache: 'force-cache',
              scale: scale,
            }}
            resizeMethod="scale"
            resizeMode="cover"
            style={{
              marginVertical: 10,
            }}
          />
          <View>
            <Header title="What make us Unique?" />
            <View style={styles.content}>
              <Text style={styles.introText}>
                Learning Saint envisions a world where education knows no
                boundaries. Our mission is to break down barriers and provide
                equitable access to exceptional learning experiences.
              </Text>
              <Text style={styles.introText}>
                Learning Saint came about with the understanding that access to
                high-quality education is no longer restricted by physical
                distances or conventional classroom walls as we traverse the
                dynamic digital world. With this in mind, we have
              </Text>
              <Text style={styles.introText}>
                Learning Saint took birth with the vision to redefine education
                for the 21st century, by making it more accessible, flexible,
                and tailored to individual needs. We take pride in becoming a
                forerunner of the online education system that has been
                instrumental in shaping the futures of countless learners
                worldwide.
              </Text>
            </View>
          </View>
          <View>
            <Header title="Deeply Rooted in Excellence" />
            <View style={styles.content}>
              <Text style={styles.introText}>
                At Learning Saint, each and every individual is driven and
                guided by the principle of excellence which is not just our
                goal. We are committed to delivering the highest standards of
                education and ensuring that our learners are equipped with the
                knowledge, skills, and confidence needed to succeed in their
                chosen fields. Our team of experienced educators and experts is
                dedicated to providing a supportive learning environment that
                fosters critical thinking, creativity, and a passion for
                lifelong learning.
              </Text>
            </View>
          </View>
          <View>
            <Header title="Global Cohort of Learners" />
            <View style={styles.content}>
              <Text style={styles.introText}>
                We take pride in our rich and diverse cohort of learners that we
                have nurtured over the years, that has become our greatest
                strength and assets. Our virtual classrooms connect individuals
                from around the world, fostering a global perspective and
                cross-cultural exchange of ideas. This enriching environment
                enables our learners to broaden their horizons and gain insights
                that transcend textual knowledge.
              </Text>
            </View>
          </View>
          <View>
            <Header title="Join Us for Your Career Progression Today" />
            <View style={styles.content}>
              <Text style={styles.introText}>
                We advocate the idea of learning as a lifelong journey, and we
                are here to accompany you every step of the way regardless of
                your goals, be it embarking on a new career path, pursuing a
                passion, or simply seeking personal growth, Learning Saint
                invites you to explore the opportunities that await you here.
              </Text>
            </View>
          </View>
          <View>
            <Header title="Vision" />
            <Text
              style={{
                fontSize: Size.fontSize.md_16,
                fontWeight: '500',
              }}>
              A Robust Community of Lifelong Learners
            </Text>
            <View style={styles.content}>
              <Text style={styles.introText}>
                Learning Saint envisions a world where education knows no
                boundaries. Our mission is to break down barriers and provide
                equitable access to exceptional learning experiences. We aspire
                to redefine education for the digital age, delivering
                personalized, high-quality instruction that empowers individuals
                to thrive in a rapidly evolving global landscape. Through
                innovation, inclusivity, and excellence, we are committed to
                shaping a brighter future for all." Our commitment to
                transparency extends across our entire community, encompassing
                students, coaches, and hiring partners. We firmly believe in
                fostering an environment where every stakeholder is informed
                about our processes, ensuring open communication and a shared
                sense of trust.
              </Text>
            </View>
          </View>
          <View>
            <Header title="Mission" />

            <View style={styles.content}>
              <Text style={styles.introText}>
                Learning Saint thrives with the mission to offer students a
                risk-free educational journey that empowers them to unlock their
                full potential. We are dedicated to providing a secure and
                nurturing learning environment where students can explore their
                capabilities and thrive, free from the fear of academic or
                financial setbacks. We also aspire to be the world's foremost
                student-centric educational institution. We are committed to
                delivering education that aligns with the needs and aspirations
                of our students. Our unwavering dedication to guaranteeing
                learning outcomes sets us apart, ensuring that every individual
                who walks through our virtual doors leaves with the knowledge
                and skills they seek, ready to succeed in an ever-changing
                world.
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={[
                styles.introText,
                {
                  marginTop: 20,
                  color: Colors.default.tint,
                  textAlign: 'justify',
                  fontWeight: 'bold',
                },
              ]}>
              What We Believe in
            </Text>
            <Header title="We are Guided and Driven by" />
            <InfoSection
              byUrlImage={true}
              icon="https://www.learningsaint.com/assets/images/icons/offer-icon-01.png"
              title="Transparency"
              description="Our commitment to transparency extends to our entire community, encompassing students, coaches, and hiring partners. We believe in providing clear insights into our processes, and fostering trust and understanding."
            />
            <InfoSection
              byUrlImage={true}
              icon="https://www.learningsaint.com/assets/images/icons/student.png"
              title="Empathy"
              description="Recognizing the diversity of experiences and backgrounds among our students, we place a strong emphasis on empathy throughout their journey with us. Our approach is rooted in understanding and supporting each learner's unique needs."
            />
            <InfoSection
              byUrlImage={true}
              icon="https://www.learningsaint.com/assets/images/icons/reward.png"
              title="Quality"
              description="At our core, we are dedicated to delivering top-tier training and learning platforms. Our unwavering focus on quality ensures that our students achieve the best possible learning outcomes."
            />
            <InfoSection
              byUrlImage={true}
              icon="https://www.learningsaint.com/assets/images/icons/offer-icon-04.png"
              title="Collaboration"
              description="Rather than fostering competition, we prioritise collaboration within our community. We understand the value of working together to learn and grow, creating an environment where everyone can thrive."
            />
          </View>
          <Testimonials testimonialsReview={testimonialsAbout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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

export default AboutUsScreen;
