import React from 'react';

export default function Products(props: {
  title: string;
  image: string;
  id: string;
  price: any;
  amount: number;
  description: string;
  rating: any;
  addToCart: any;
  handleAmountChange: any;
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
        <input
          onChange={() => props.handleAmountChange(event)}
          className="h-7 p-1 w-14"
          value={props.amount}
          min="0"
          type="number"
          name={`amount-${props.id}`}
          id={props.id}
        />
        <div className="text-right pt-0.5 font-bold">${props.price}</div>
      </div>
      <div className="flex flex-row mb-2 self-center">
        <button
          onClick={() => props.addToCart(props, props.amount)}
          className="uppercase p-1 bg-black rounded hover:bg-white hover:text-black text-white font-bold"
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
