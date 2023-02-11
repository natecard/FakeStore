import React, { useEffect, useState, createContext } from 'react';
import { item } from './Components/Interfaces';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import ShoppingCart from './Components/ShoppingCart';
export const Context = createContext<any>([]);

export default function App() {
  const [productData, setProductData] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState<item[]>([]);

  useEffect(() => {
    async function apiStoreCall() {
      const request = await fetch(
        'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}',
        { mode: 'cors' }
      );
      const response = await request.json();
      const {
        data: {
          products: { edges },
        },
      } = response;
      setProductData(
        edges.map((item, index) => ({
          id: item.node.id,
          title: item.node.title,
          description: item.node.description,
          image: item.node.featuredImage.url,
          quantity: item.quantity,
          handleQuantityChange: handleQuantityChange,
          addToCart: addToCart,
          amount: item.node.variants.edges.map((edge: any) => {
            return edge.node.price.amount;
          }),
        }))
      );
    }
    apiStoreCall();
  }, []);

  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(event.target.value));
    console.log(event.target.value);
  }
  function addToCart(item: item, quantity: number) {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const cartItemIndex = newCart.findIndex((i) => i.id === item.id);
      if (cartItemIndex === -1) {
        newCart.push({
          id: item.id,
          title: item.title,
          description: item.description,
          quantity: quantity,
          addToCart: addToCart,
          handleQuantityChange: handleQuantityChange,
          image: item.image,
          amount: item.amount,
        });
        return newCart;
      }
      const cartItem = newCart[cartItemIndex];
      cartItem.quantity += quantity;
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
        quantity,
        setQuantity,
        cart,
        setCart,
        addToCart,
        handleQuantityChange,
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
