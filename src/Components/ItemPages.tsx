import React from 'react';
import Footer from './Footer';
import Header from './Header';
import item from './Interfaces';
export default function Items(props: item) {
  return (
    <div>
      <Header />
      <div
        key={props.id}
        className="flex bg-[#f3f3f3] text-black justify-around font-base flex-col pt-24 lg:px-48"
      >
        <h2 className="text-center text-4xl md:text-6xl pt-20">
          {props.title}
        </h2>
        <img
          className="flex rounded-lg justify-end self-center"
          src={props.image}
          alt={props.title}
        />
        <h2 className="py-16 px-10 text-center text-base md:text-2xl">
          {props.description}
        </h2>
        <div className="justify-center  align-middle flex flex-row p-2">
          <input
            onChange={() => props.handleQuantityChange(event)}
            className="h-7 p-1 pl-1.5 w-14 text-base  md:text-2xl hover:border-green-700 focus:border-green-700 focus:outline-none border-2 border-[#f3f3f3] hover:border-2 focus:border-2 border-solid rounded-md bg-[#f3f3f3]"
            value={props.quantity}
            min="0"
            max="999"
            type="number"
            placeholder="0"
            name={`amount-${props.id}`}
            id={props.id}
          />
          <div className="text-right md:pt-0 pt-1 text-base md:text-2xl px-4 md:px-6 lg:px-8 font-bold">
            ${props.amount}0
          </div>
          <button
            onClick={() => props.addToCart(props, props.quantity)}
            className="uppercase md:px-3 md:py-1 bg-black rounded hover:bg-white hover:text-black text-white font-bold"
          >
            add to cart
          </button>
        </div>
        <div className="flex flex-row mb-2 self-center"></div>
      </div>
      <Footer />
    </div>
  );
}
