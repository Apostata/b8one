export default interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  with_discont: number;
  installments: number;
  isFavourite: boolean;
}
