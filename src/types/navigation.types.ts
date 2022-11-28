import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Boarding: undefined;
  Signup: undefined;
  Login: undefined;
  HomeNavigator: undefined;
  Product: undefined;
  Cart: undefined;
  Checkout: undefined;
  Congrats: undefined;
  Loading: undefined;
  PaymentNavigator: undefined;
  MyOrders: undefined;
  ShippingNavigator: undefined;
  ReviewNavigator: undefined;
  Setting: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
  Favorite: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type ShippingAddressStackParamList = {
  ShippingAddress: undefined;
  AddShippingAddress: undefined;
};

export type PaymentMethodStackParamList = {
  PaymentMethod: undefined;
  AddPayment: undefined;
};

export type ReviewStackParamList = {
  MyReview: undefined;
  Review: undefined;
};

export type BoardingScreenProps = StackScreenProps<
  RootStackParamList,
  'Boarding'
>;

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

export type CongratsScreenProps = StackScreenProps<
  RootStackParamList,
  'Congrats'
>;

export type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Profile'>,
  StackScreenProps<RootStackParamList>
>;

export type ProductScreenProps = StackScreenProps<
  RootStackParamList,
  'Product'
>;

export type ProductNavigationProp = ProductScreenProps['navigation'];

export type ProductRouteProp = ProductScreenProps['route'];

export type PaymentScreenProps = StackScreenProps<
  PaymentMethodStackParamList,
  'PaymentMethod'
>;

export type AddPaymentProps = StackScreenProps<
  PaymentMethodStackParamList,
  'AddPayment'
>;

export type SignupScreenProps = StackScreenProps<RootStackParamList, 'Signup'>;

export type SignupNavigationProp = SignupScreenProps['navigation'];

export type SignupRouteProp = SignupScreenProps['route'];

export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

export type LoginNavigationProp = LoginScreenProps['navigation'];

export type LoginRouteProp = LoginScreenProps['route'];
