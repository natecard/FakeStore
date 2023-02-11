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
  } = useContext(Context) as {
    productData: item[];
    setProductData: any;
    amount: number;
    quantity: number;
    setQuantity: any;
    setCart: any;
    cart: item[];
  };
  console.log(Context);
  if (!productData) return null;

  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(event.target.value));
  }

  function addToCart(item: item, quantity: number) {
    setCart((prevCart: any) => {
      const newCart = [...prevCart];
      const cartItemIndex = newCart.findIndex((i) => i.id === item.id);
      if (cartItemIndex === -1) {
        newCart.push({
          id: item.id,
          title: item.title,
          image: item.image,
          amount: item.amount,
          description: item.description,
          quantity: quantity,
          addToCart: addToCart,
          handleQuantityChange: handleQuantityChange,
        });
        return newCart;
      }
      const cartItem = newCart[cartItemIndex];
      cartItem.quantity += quantity;
      newCart[cartItemIndex] = cartItem;
      return newCart;
    });
    console.log(cart);
  }
  const productElements = productData.map((item) => (
    <Items
      title={item.title}
      id={item.id}
      key={item.id}
      amount={item.amount['0']}
      quantity={item.quantity}
      description={item.description}
      image={item.image}
      addToCart={() => addToCart(item, quantity)}
      handleQuantityChange={() => handleQuantityChange(event)}
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
