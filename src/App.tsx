import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Products from './Components/Products';

export default function App() {
  interface item {
    title: string;
    image: string;
    id: string;
    price: number;
    amount: number;
    description: string;
    rating: any;
    addToCart: any;
    handleAmount: any;
  }

  function addToCart(item: item) {
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
          amount: 1,
          addToCart: addToCart,
          handleAmount: handleAmount,
        });
        return newCart;
      }
      const cartItem = newCart[cartItemIndex];
      cartItem.amount++;
      newCart[cartItemIndex] = cartItem;
      return newCart;
    });
    console.log(`clicked: ${item.id}`);
  }

  function handleAmount(
    id: item['id'],
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const name = event.target.name;
    const value = event.target.value;
    setProductsData((prevData: any) => {
      const newData = [...prevData];
      const itemIndex = newData.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        // handle error if item with the given id is not found in the productsData array
        return prevData;
      }
      newData[itemIndex] = {
        ...newData[itemIndex],
        [name]: value,
      };
      return newData;
    });
    console.log(value);
  }
  const [productData, setProductsData] = useState<any>([]);
  const [productDetails, setProductDetails] = useState([]);
  const [cart, setCart] = useState<
    Array<{
      title: string;
      image: string;
      id: string;
      price: number;
      amount: number;
      description: string;
      rating: any;
      addToCart: any;
      handleAmount: any;
    }>
  >([]);
  useEffect(() => {
    async function apiStoreCall() {
      const resp = await fetch('https://fakestoreapi.com/products/', {
        mode: 'cors',
      });
      const returnedData = await resp.json();
      // const shortenedData = returnedData.slice(0, 24);
      setProductsData(returnedData);
    }
    apiStoreCall();
  }, []);
  useEffect(() => {
    const mappedProducts = productData.map((item: item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      description: item.description,
      rating: item.rating,
      amount: item.amount,
    }));
    setProductDetails(mappedProducts);
    console.log(cart);
  }, [productData]);

  const productElements = productData.map((item: item) => (
    <Products
      title={item.title}
      image={item.image}
      id={item.id}
      key={item.id}
      price={item.price.toFixed()}
      amount={item.amount}
      addToCart={() => addToCart(item)}
      handleAmount={() => handleAmount(item.id, event)}
    />
  ));
  return (
    <div>
      <Header />
      <div className="grid gap-5 grid-rows-6 grid-cols-4">
        {productElements}
      </div>
    </div>
  );
}
