import React, { useEffect, useState, createContext } from 'react';
import item from './Components/ItemInterface';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import ShoppingCart from './Components/ShoppingCart';
export const Context = createContext<any>([]);

export default function App() {
  const [productData, setProductData] = useState<any>([]);
  const [amount, setAmount] = useState(0);
  const [cart, setCart] = useState<
    Array<{
      title: string;
      image: string;
      id: string;
      price: any;
      amount: any;
      description: string;
      rating: any;
      addToCart: any;
      handleAmountChange: any;
    }>
  >([]);

  useEffect(() => {
    async function apiStoreCall() {
      const resp = await fetch('https://fakestoreapi.com/products/', {
        mode: 'cors',
      });
      const returnedData = await resp.json();
      // const shortenedData = returnedData.slice(0, 24);
      setProductData(returnedData);
      console.log(productData);
    }
    apiStoreCall();
  }, [setProductData]);
  function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
    console.log(event.target.value);
  }
  function addToCart(item: item, amount: number) {
    setCart((prevCart) => {
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
    console.log(`clicked: ${item.id}`);
  }
  return (
    <Context.Provider
      value={{
        productData,
        setProductData,
        amount,
        setAmount,
        cart,
        setCart,
        addToCart,
        handleAmountChange,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
      </Routes>
    </Context.Provider>
  );
}
