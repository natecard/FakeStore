import React, { useContext } from 'react';
import { Context } from '../App';
import Header from './Header';
import Items from './Items';
import { item } from './Interfaces';

export default function Products() {
  const {
    productData,
    setProductData,
    setCart,
    cart,
    quantity,
    setQuantity,
    amount,
    handleCartChange,
    removeFromCart,
    addToCart,
    handleQuantityChange,
  } = useContext(Context) as {
    productData: item[];
    setProductData: any;
    amount: number;
    quantity: number;
    setQuantity: any;
    setCart: any;
    cart: item[];
    handleCartChange: Function;
    removeFromCart: Function;
    handleQuantityChange: Function;
    addToCart: Function;
  };
  if (!productData) return null;

  const productElements = productData.map((item) => (
    <Items
      title={item.title}
      id={item.id}
      key={item.id}
      amount={item.amount}
      quantity={item.quantity}
      description={item.description}
      image={item.image}
      addToCart={() => addToCart(item, quantity)}
      handleQuantityChange={() => handleQuantityChange(event)}
      handleCartChange={handleCartChange}
      removeFromCart={removeFromCart}
    />
  ));
  return (
    <div>
      <Header />
      <div className="grid bg-[#f3f3f3] gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {productElements}
      </div>
    </div>
  );
}
