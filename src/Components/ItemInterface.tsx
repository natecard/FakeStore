export default interface item {
  title: string;
  image: string;
  id: string;
  price: any;
  amount: number;
  description: string;
  rating: any;
  addToCart: Function;
  handleAmountChange: Function;
}
