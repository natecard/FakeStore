import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Products from './Components/Products';

export default function App() {
  interface item {
    title: string;
    image: string;
    id: string;
    price: any;
    amount: number;
    description: string;
    rating: any;
    addToCart: any;
    handleAmount: any;
  }
  const [productData, setProductData] = useState<any>([]);
  const [productDetails, setProductDetails] = useState([]);
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

  function handleAmount(
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = Number(event.target.value);
    setProductData((prevData: any) => {
      const newData = [...prevData];
      const index = newData.findIndex((item) => item.id === id);
      newData[index] = {
        ...newData[index],
        amount: value,
      };
      return newData;
    });
    console.log(value);
  }

  useEffect(() => {
    async function apiStoreCall() {
      const resp = await fetch('https://fakestoreapi.com/products/', {
        mode: 'cors',
      });
      const returnedData = await resp.json();
      // const shortenedData = returnedData.slice(0, 24);
      setProductData(returnedData);
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
