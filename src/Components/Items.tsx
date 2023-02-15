import React from 'react';
import { Link } from 'react-router-dom';
import item from './Interfaces';
export default function Items(props: item) {
  return (
    <div
      key={props.id}
      className="flex justify-around font-base flex-col pt-4 px-4"
    >
      <Link to={`/${props.title}`}>
        <img
          className=" rounded-md flex object-fill justify-end self-center"
          src={props.image}
          alt={props.title}
        />
        <h2 className="text-center truncate">{props.title}</h2>
      </Link>
      <div className="justify-center  align-middle flex flex-row p-2">
        <input
          onChange={() => props.handleQuantityChange(event)}
          className="h-7 p-1 pl-1.5 w-14 hover:border-green-700 focus:border-green-700 focus:outline-none border-2 border-[#f3f3f3] hover:border-2 focus:border-2 border-solid rounded-md bg-[#f3f3f3]"
          value={props.quantity}
          min="0"
          max="999"
          type="number"
          placeholder="0"
          name={`amount-${props.id}`}
          id={props.id}
        />
        <div className="text-right pl-4 md:pl-6 lg:pl-8 pt-0.5 font-bold">
          ${props.amount}0
        </div>
      </div>
      <div className="flex flex-row mb-2 self-center">
        <button
          onClick={() => props.addToCart(props, props.quantity)}
          className="uppercase p-1 bg-black rounded hover:bg-white hover:text-black text-white font-bold"
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
