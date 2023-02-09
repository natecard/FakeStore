import React, { useContext } from 'react';
import { Context } from '../App';
import Items from './Items';
import Header from './Header';
import item from './ItemInterface';
import ShoppingCartContents from './ShoppingCartContents';

export default function ShoppingCart() {
  const { cart } = useContext(Context) as { cart: Array<item> };
  console.log(cart);
  const shoppingCartElements = cart.map((item: item) => (
    <ShoppingCartContents
      cart={cart}
      title={item.title}
      image={item.image}
      id={item.id}
      key={item.id}
      price={item.price.toFixed()}
      amount={item.amount}
    />
  ));
  return (
    <div>
      <Header />
      <div>{shoppingCartElements}</div>
    </div>
  );
}
