import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  MobileNumberLogin: undefined;
  drawer: undefined;
  guest: undefined;
  OtpScreen: {
    object: string | number;
  };
  SuccessfullScreen: {
    orderID: string | number;
  };
  FailureScreen: {
    orderID: string | number;
  };
  CheckoutScreen: {
    courseContext: {
      image: string;
      title: string;
      price: {
        amount: number;
        amount_title: string;
        currency: string;
        currencySign: string;
      };
      url: string;
    };
    price: number;
    platform: string;
    userPaymentDetail: {
      name: string;
      email: string;
      number: string;
      course: string;
      address: string;
      amount: string;
    };
  };
  ChoosePlatform: {
    courseContext: {
      image: string;
      title: string;
      price: {
        amount: number;
        amount_title: string;
        currency: string;
        currencySign: string;
      };
      url: string;
    };
  };
  PaymentForm: {
    price: number;
    courseContext: {
      image: string;
      title: string;
      price: {
        amount: number;
        amount_title: string;
        currency: string;
        currencySign: string;
      };
      url: string;
    };
    platform: string;
  };
  Testing: undefined;
  TermsScreen: undefined;
  PrivacyScreen: undefined;
  ContactScreen: undefined;
  BugReportScreen: undefined;
  ClassesScreen: {
    batchId: number | string;
  };
  RecordingScreen: {
    batchId: number | string;
  };
  AssignmentScreen: {
    batchId: number | string;
  };
  EbookScreen: {
    batchId: number | string;
  };
  CourseDetails: {
    courseURL: string;
  };
  CountryScreen: undefined;
  StripePaymentScreen: undefined;
  MyCourseListScreen: {
    canGoBack: 0 | 1;
  };
  ArticleScreen: undefined;
  CoursesListScreen: {
    allCourses: any;
    filterdCoursestype: {
      id: string;
      isChecked: boolean;
      name: string;
      selectColor: string;
    }[];
  };
  AboutScreen: undefined;
  ArticleDetailScreen: {
    url: string;
    name: string;
  };
  OrderReceiptDetailedScreen: {
    order: {
      id: number;
      siteid: string;
      user_id: string;
      course: string;
      courseUrl: string;
      coursePrice: string;
      customerAmount: string;
      currency: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      coupon: string;
      couponAmount: string;
      referralId: string;
      ip: string;
      country: string;
      state: string;
      city: string;
      source: string;
      created_at: string;
      updated_at: string;
      payments: {
        id: number;
        order_id: string;
        amount: string;
        gateway: string;
        status: string;
        transactionId: string;
        paymentMode: string;
        date: string;
        currency: string;
        response: string;
        created_at: string;
        updated_at: string;
      }[];
    };
  };
  SapErpDetailScreen: {
    url: string;
  };
  DataScienceDetailScreen: {
    url: string;
  };
  RazorpayPaymentScreen: {
    data: any;
  };
  YouTubeVideo: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  Home: undefined;
  Account: undefined;
  MyCoursesScreen: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
