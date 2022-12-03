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
};

export type PaymentCardType = {
  id: string;
  cardHolderName: string;
  cardNumber: number;
  cvv: number;
  expirationDate: string;
};

export type ShippingAddressType = {
  fullName: string;
  address: string;
  zipcode: string;
  country: string;
  city: string;
  district: string;
};

export type OrderType = {
  name: string;
};

export type ReviewType = {
  name: string;
};

export type CartType = {
  products: ProductType[];
  qty: number;
  totalPrice: number;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  cart: CartType;
  paymentMethods: PaymentCardType[];
  orders: OrderType[];
  reviews: ReviewType[];
  shippingAddress: ShippingAddressType[];
  avatar: string;
  type: AccountType;
};

export type AccountType = 'normal' | 'social';
