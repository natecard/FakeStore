import React, { useContext } from 'react';
import { Context } from '../App';
import Header from './Header';
import Items from './Items';
import item from './ItemInterface';

export default function Products() {
  const { productData, setProductData, setCart, cart, amount, setAmount } =
    useContext(Context) as {
      productData: Array<item>;
      setProductData: any;
      amount: number;
      setAmount: any;
      setCart: any;
      cart: Array<item>;
    };
  console.log(Context);
  if (!productData) return null;

  function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
  }
  function addToCart(item: item, amount: number) {
    setCart((prevCart: any) => {
      const newCart = [...prevCart];
      const cartItemIndex = newCart.findIndex((i) => i.id === item.id);
      if (cartItemIndex === -1) {
        newCart.push({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          description: item.description,
          rating: item.rating,
          amount: amount,
          addToCart: addToCart,
          handleAmountChange: handleAmountChange,
        });
        return newCart;
      }
      const cartItem = newCart[cartItemIndex];
      cartItem.amount += amount;
      newCart[cartItemIndex] = cartItem;
      return newCart;
    });
    console.log(cart);
  }
  const productElements = productData.map((item) => (
    <Items
      title={item.title}
      image={item.image}
      id={item.id}
      key={item.id}
      price={item.price.toFixed()}
      amount={item.amount}
      description={item.description}
      rating={item.rating}
      addToCart={() => addToCart(item, amount)}
      handleAmountChange={() => handleAmountChange(event)}
    />
  ));
  return (
    <div>
      <Header />
      <div className="grid gap-6 grid-rows-6 grid-cols-4">
        {productElements}
      </div>
    </div>
  );
}
