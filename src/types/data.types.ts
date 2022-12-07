import {OrderTabType} from './constant.types';

export type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isFavourite: boolean;
  popular: number;
  rate: number;
  review: number;
  qty: number;
};

export type PaymentCardType = {
  id: string;
  cardHolderName: string;
  cardNumber: number;
  cvv: number;
  expirationDate: string;
};

export type ShippingAddressType = {
  id: string;
  fullName: string;
  address: string;
  zipcode: number;
  country: string;
  city: string;
  district: string;
};

export type OrderType = {
  id: string;
  products: ProductType[];
  orderCode: number;
  totalQty: number;
  totalPrice: number;
  status: OrderTabType;
  date: string;
};

export type ReviewType = {
  comment: string;
  product: ProductType[];
  image: string;
  rating: number;
  date: string;
};

export type CartType = {
  products: ProductType[];
  totalQty: number;
  totalPrice: number;
};

export type NotiType = {
  orders: OrderType[];
  hasDeliveryNoti: boolean;
  hasSalesNoti: boolean;
  hasNewArrivalsNoti: boolean;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  cart: CartType;
  paymentMethods: PaymentCardType[];
  orders: OrderType[];
  reviews: ReviewType[];
  shippingAddresses: ShippingAddressType[];
  avatar: string;
  type: AccountType;
  favourite: ProductType[];
  selectedAddress: ShippingAddressType | null;
  selectedPaymentMethod: PaymentCardType | null;
  notification: NotiType;
};

export type AccountType = 'normal' | 'social';
