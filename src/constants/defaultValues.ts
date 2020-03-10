import { AddressItem, ProductDetails } from '../types/types';

export const emptyAddress: AddressItem = {
  address1: '',
  address2: '',
  city: '',
  country: '',
  id: '',
  name: '',
  firstName: '',
  lastName: '',
  phone: '',
  province: '',
  zip: '',
};

export const emptyProduct: ProductDetails = {
  id: '',
  images: [],
  title: '',
  description: '',
  handle: '',
  price: 0,
  discount: 0,
  url: '',
};