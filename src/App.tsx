import React, { useEffect, useState, createContext } from 'react';
import item from './Components/Interfaces';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import ShoppingCart from './Components/ShoppingCart';
export const Context = createContext<any>([]);

export default function App() {
  const [productData, setProductData] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [itemTotal, setItemTotal] = useState(0);
  const [cart, setCart] = useState<item[]>([]);
  const [cartSum, setCartSum] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

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
      console.log(edges);
      setProductData(
        edges.map(
          (
            item: {
              node: {
                id: any;
                title: any;
                description: any;
                featuredImage: { url: any };
                variants: { edges: any[] };
              };
              quantity: any;
            },
            index: any
          ) => ({
            id: item.node.id,
            title: item.node.title,
            description: item.node.description,
            image: item.node.featuredImage.url,
            quantity: item.quantity,
            handleQuantityChange: handleQuantityChange,
            addToCart: addToCart,
            itemTotal: itemTotal,
            cartQuantity: cartQuantity,
            cartSum: cartSum,
            amount: item.node.variants.edges
              .map((edge: any) => {
                return edge.node.price.amount;
              })
              .slice(0, 1)
              .join(''),
          })
        )
      );
    }
    apiStoreCall();
  }, []);

  useEffect(() => {
    cart.map((item: item) => {
      setItemTotal(item.amount * item.quantity);
    });
  }, [cart]);
  const cartAmount: any[] = [];
  const itemQuantity: any[] = [];

  useEffect(() => {
    const amountTotal = cart.map((item: item) => {
      cartAmount.push(item.amount);
      itemQuantity.push(item.quantity);
    });
    function sumArray(array: any[]) {
      return array
        .map(function (item) {
          return parseFloat(item);
        })
        .reduce(function (sum, current) {
          return sum + current;
        }, 0);
    }
    setCartSum(sumArray(cartAmount));
    setCartQuantity(sumArray(itemQuantity));
  }, [cart]);

  useEffect(() => {
    const totalAmount = cartAmount.map(
      (item, index) => item * itemQuantity[index]
    );
    const finalTotal = totalAmount.reduce((sum, current) => {
      return sum + current;
    }, 0);
    setCartTotal(finalTotal);
  }, [cart]);

  function removeFromCart(itemId: string) {
    console.log('item deleted', itemId);
    setCart((oldCart) => oldCart.filter((item) => item.id !== itemId));
  }

  function handleCartChange(
    item: item,
    quantity: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
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
          handleCartChange: handleCartChange,
          removeFromCart: removeFromCart,
          cartQuantity: cartQuantity,
          cartSum: cartSum,
        });

        return newCart;
      }
      if (item.quantity < 1) {
        removeFromCart(item.id);
      }
      const cartItem = newCart[cartItemIndex];
      cartItem.quantity = Number(event.target.value);
      newCart[cartItemIndex] = { ...cartItem };
      return newCart;
    });
  }

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
          quantity: quantity < 1 ? 1 : quantity,
          addToCart: addToCart,
          handleQuantityChange: handleQuantityChange,
          image: item.image,
          amount: item.amount,
          handleCartChange: handleCartChange,
          removeFromCart: removeFromCart,
          cartQuantity: cartQuantity,
          cartSum: cartSum,
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
        handleCartChange,
        removeFromCart,
        cartSum,
        cartQuantity,
        setCartSum,
        setCartQuantity,
        setItemTotal,
        itemTotal,
        cartTotal,
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
