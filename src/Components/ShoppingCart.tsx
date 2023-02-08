import React from 'react';
import Header from './Header';

export default function ShoppingCart(props: any) {
  return (
    <div>
      <Header />
      <div>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <h4>{props.amount}</h4>
      </div>
    </div>
  );
}
