export interface item {
  description: string;
  id: string;
  title: string;
  image: string;
  amount: number;
  quantity: number;
  addToCart: Function;
  handleQuantityChange: Function;
  handleCartChange: Function;
  removeFromCart: Function;
  itemAmount: number;
}
