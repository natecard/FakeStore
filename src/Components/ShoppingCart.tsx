import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../App';
import Header from './Header';
import item from './Interfaces';
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
    cartTotal,
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
    cartTotal: number;
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
        <div className="sticky items-center font-bold bottom-0 bg-gray-300 py-7 grid grid-cols-5">
          <h2 className="col-start-3 text-center pr-20">
            Items: {cartQuantity}
          </h2>
          <h2 className="col-start-4 text-center pr-20">
            Cart Total: $ {cartTotal}.00
          </h2>
          <button className="uppercase mr-3 p-3 bg-black rounded hover:bg-white hover:text-black text-white font-bold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
