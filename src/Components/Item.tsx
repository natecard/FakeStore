import React from 'react';

export default function Item(props: {
  title: string;
  price: number;
  image: string;
  id: string;
  amount: number;
  addToCart: any;
  increaseAmount: any;
  decreaseAmount: any;
}) {
  return (
    <div className="flex justify-around flex-col pt-4 px-4">
      <img
        className=" flex h-44 w-32 justify-end self-center"
        src={props.image}
        alt={props.title}
      />
      <h2 className="text-center truncate">{props.title}</h2>
      <div className="justify-around align-middle flex flex-row p-2">
        <button onClick={props.decreaseAmount}>-</button>
        <input
          className="h-7 p-1 w-14"
          value={props.amount}
          min="1"
          type="number"
          name="amount"
          id="amount"
        />
        <button onClick={props.increaseAmount}>+</button>
        <div className="text-right pt-0.5 font-bold">
          ${props.price.toFixed()}
        </div>
      </div>
      <div className="flex flex-row mb-2 self-center">
        <button
          onClick={props.addToCart}
          className="uppercase p-1 bg-black rounded hover:bg-white hover:text-black text-white font-bold"
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
