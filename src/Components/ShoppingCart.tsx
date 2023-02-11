import React, { useContext } from 'react';
import { Context } from '../App';
import Items from './Items';
import Header from './Header';
import { item } from './Interfaces';
import ShoppingCartContents from './ShoppingCartContents';

export default function ShoppingCart() {
  const { cart } = useContext(Context) as { cart: item[] };
  if (!cart) return null;
  console.log(cart);
  const shoppingCartElements = cart.map((item: item) => (
    <ShoppingCartContents
      title={item.title}
      image={item.image}
      id={item.id}
      key={item.id}
      amount={item.amount['0']}
      quantity={item.quantity}
    />
  ));
  return (
    <div>
      <Header />
      <div>{shoppingCartElements}</div>
    </div>
  );
}
