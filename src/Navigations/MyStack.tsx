import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerStack} from '.';
import {
  AboutScreen,
  ArticleDetailScreen,
  ArticleScreen,
  AssignmentScreen,
  BugReportScreen,
  CheckoutScreen,
  ChoosePlatform,
  ClassesScreen,
  ContactScreen,
  CountryScreen,
  CourseDetails,
  CoursesListScreen,
  EbookScreen,
  FailureScreen,
  GuestScreen,
  LoginScreen,
  MyCourseListScreen,
  OnboardingScreen,
  OrderReceiptDetailedScreen,
  PaymentForm,
  PrivacyScreen,
  RazorpayPaymentScreen,
  RecordingScreen,
  RegisterScreen,
  SuccessfullScreen,
  TermsScreen,
  YouTubeVideo,
} from '../Screens';
import {Text} from 'react-native';
import {AuthContext, OnBoardingContext, SkipContext} from '../Context';
import {RootStackParamList} from './types';
import {ShareButton} from '../Components';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
  const {isLoggedIn} = React.useContext(AuthContext);
  const {skip} = React.useContext(SkipContext);
  const {onBoarding} = React.useContext(OnBoardingContext);
  let initialRouteName = 'OnboardingScreen';
  if (onBoarding) {
    initialRouteName = skip || isLoggedIn ? 'drawer' : 'LoginScreen';
  }
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {!onBoarding ? (
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: '#ff660a',
            headerTitle: () => <Text></Text>,
          }}
        />
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerTransparent: true,
              headerBackTitleVisible: false,
              headerTintColor: '#ff660a',
              headerTitle: () => <Text></Text>,
            }}
          />

          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTintColor: '#ff660a',
              headerTitle: () => <Text></Text>,
            }}
          />

          <Stack.Screen
            name="drawer"
            component={DrawerStack}
            options={{
              title: 'Welcome',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="guest"
            component={GuestScreen}
            options={{
              headerTransparent: true,
              headerBackTitleVisible: false,
              headerTintColor: '#ff660a',
              headerTitle: () => <Text></Text>,
            }}
          />
          <Stack.Screen
            name="ArticleScreen"
            component={ArticleScreen}
            options={{
              headerBackTitleVisible: false,
              title: 'Blogs',
            }}
          />
          <Stack.Screen
            name="ArticleDetailScreen"
            component={ArticleDetailScreen}
            options={({route}) => ({
              title: route.params.name,
              headerBackTitleVisible: false,
              headerRight: () => (
                <ShareButton
                  shareText={`https://www.learningsaint.com/blog/${route.params.url}`}
                />
              ),
            })}
          />
          <Stack.Screen
            name="CourseDetails"
            component={CourseDetails}
            options={{
              title: 'Course Detail',
            }}
          />

          <Stack.Group>
            <Stack.Screen
              name="FailureScreen"
              component={FailureScreen}
              options={{
                title: 'Faliure Payment',
              }}
            />
            <Stack.Screen
              name="SuccessfullScreen"
              component={SuccessfullScreen}
              options={{
                title: 'Successful Payment',
              }}
            />
            <Stack.Screen
              name="ChoosePlatform"
              component={ChoosePlatform}
              options={{
                headerBackTitleVisible: false,
                title: 'Payment Platforms',
              }}
            />
            <Stack.Screen
              name="PaymentForm"
              component={PaymentForm}
              options={{
                headerBackTitleVisible: false,
                title: 'Payment Details',
              }}
            />
            <Stack.Screen
              name="CheckoutScreen"
              component={CheckoutScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Review Details',
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="TermsScreen"
              component={TermsScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Terms and Conditions',
              }}
            />
            <Stack.Screen
              name="PrivacyScreen"
              component={PrivacyScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Privacy Policy',
              }}
            />
            <Stack.Screen
              name="ContactScreen"
              component={ContactScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Contact Us',
              }}
            />
            <Stack.Screen
              name="BugReportScreen"
              component={BugReportScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Bug Report',
              }}
            />
            <Stack.Screen
              name="CountryScreen"
              component={CountryScreen}
              options={{
                headerBackTitleVisible: false,
                headerShown: false,
                title: 'Country',
              }}
            />
            <Stack.Screen
              name="CoursesListScreen"
              component={CoursesListScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Filterd Courses',
              }}
            />

            <Stack.Screen
              name="ClassesScreen"
              component={ClassesScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Batches Classes List',
              }}
            />
            <Stack.Screen
              name="RecordingScreen"
              component={RecordingScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Recordings List',
              }}
            />
            <Stack.Screen
              name="AssignmentScreen"
              component={AssignmentScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Assignments List',
              }}
            />
            <Stack.Screen
              name="EbookScreen"
              component={EbookScreen}
              options={{
                headerBackTitleVisible: false,
                title: 'Ebooks List',
              }}
            />
          </Stack.Group>
          <Stack.Screen
            name="MyCourseListScreen"
            component={MyCourseListScreen}
            options={{
              headerBackTitleVisible: false,
              title: '',
              headerBackButtonMenuEnabled: false,
            }}
            initialParams={{
              canGoBack: 0, // true if you want to go back to previous screen
            }}
          />
          <Stack.Screen
            name="OrderReceiptDetailedScreen"
            component={OrderReceiptDetailedScreen}
            options={{
              headerBackTitleVisible: false,
              title: '',
              headerBackButtonMenuEnabled: false,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{
              headerBackTitleVisible: false,
              title: 'About us',
              headerBackButtonMenuEnabled: false,
            }}
          />
          <Stack.Screen
            name="RazorpayPaymentScreen"
            component={RazorpayPaymentScreen}
            options={{
              headerBackTitleVisible: false,
              title: 'Payment',
              headerBackButtonMenuEnabled: false,
            }}
          />
          <Stack.Screen
            name="YouTubeVideo"
            component={YouTubeVideo}
            options={{
              headerBackTitleVisible: false,
              headerBackButtonMenuEnabled: false,
            }}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MyStack;
