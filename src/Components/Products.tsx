import React, { useEffect, useState } from 'react';
import Header from './Header';
import Item from './Item';

export default function Products() {
  interface item {
    title: string;
    image: string;
    id: string;
    price: number;
    amount: number;
    addToCart: any;
  }
  function addToCart(item: item['id']) {
    console.log('clicked');
    console.log(item);
  }
  function increaseAmount(item: item['amount']) {
    console.log('increased');
    setItemAmount((prevVal) => prevVal + 1);
  }
  function decreaseAmount(item: item['amount']) {
    console.log('decreased');
    setItemAmount((prevVal) => prevVal - 1);
  }
  const [productData, setProductsData] = useState<data>([]);
  const [productDetails, setProductDetails] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);

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
      title: item.title,
      image: item.image,
      id: item.id,
      price: item.price,
    }));
    setProductDetails(mappedProducts);
    console.log(productDetails);
  }, [productData]);

  const productElements = productData.map((item: item) => (
    <Item
      title={item.title}
      image={item.image}
      id={item.id}
      key={item.id}
      price={item.price}
      amount={item.amount}
      addToCart={() => addToCart(item.id)}
      increaseAmount={() => increaseAmount(item.amount)}
      decreaseAmount={() => decreaseAmount(item.amount)}
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
