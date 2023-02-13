import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../App';
import Header from './Header';
import { item } from './Interfaces';
import ShoppingCartContents from './ShoppingCartContents';

export default function ShoppingCart() {
  const {
    cart,
    quantity,
    handleQuantityChange,
    addToCart,
    handleCartChange,
    removeFromCart,
    cartSum,
    setCartSum,
    cartQuantity,
    setCartQuantity,
  } = useContext(Context) as {
    amount: number;
    quantity: number;
    setQuantity: any;
    setCart: any;
    cart: item[];
    handleCartChange: Function;
    removeFromCart: Function;
    handleQuantityChange: Function;
    addToCart: Function;
    cartSum: number;
    cartQuantity: number;
    setCartSum: any;
    setCartQuantity: any;
  };

  if (!cart) return null;

  const shoppingCartElements = cart.map((item: item) => (
    <ShoppingCartContents
      title={item.title}
      image={item.image}
      id={item.id}
      key={item.id}
      amount={item.amount}
      quantity={item.quantity}
      handleCartChange={() => handleCartChange(item, quantity, event)}
      removeFromCart={() => removeFromCart(item.id)}
      description={item.description}
      addToCart={addToCart}
      handleQuantityChange={handleQuantityChange}
    />
  ));
  return (
    <div>
      <Header />
      <div className="flex flex-col font-base min-h-screen bg-[#f3f3f3]">
        <h2 className="text-4xl self-center">Shopping Cart</h2>
        <div className="grid-cols-1  ">{shoppingCartElements}</div>
        <div className="grid grid-cols-5">
          <h2 className="col-start-3">Items:{cartQuantity}</h2>
          <h2 className="col-start-4">Cart Total:${cartSum}.00</h2>
        </div>
      </div>
    </div>
  );
}
