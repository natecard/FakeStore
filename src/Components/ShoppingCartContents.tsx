import React, { useContext } from 'react';
import { Context } from '../App';
import item from './Interfaces';
export default function ShoppingCartContents(props: item) {
  return (
    <div
      key={props.id}
      className=" border-b-[1px] border-solid border-gray-400 justify-around pr-3 font-base grid grid-cols-5"
    >
      <img
        className=" rounded-md flex h-44 justify-end self-center"
        src={props.image}
        alt={props.title}
      />
      <h2 className="text-center self-center truncate">{props.title}</h2>
      <div className="justify-center  self-center flex flex-row p-2">
        <input
          onChange={() => props.handleCartChange(props, props.quantity, event)}
          className="h-7 p-1 pl-1.5 w-14 hover:border-green-700 focus:border-green-700 focus:outline-none border-2 border-[#f3f3f3] hover:border-2 focus:border-2 border-solid rounded-md bg-[#f3f3f3]"
          value={props.quantity}
          min="0"
          max="999"
          type="number"
          step={1}
          name={`amount-${props.id}`}
          id={props.id}
        />
      </div>
      <div className=" flex justify-center self-center font-bold">
        ${props.quantity * props.amount}.00
      </div>
      <div className="flex flex-row mb-2 self-center">
        <button
          onClick={() => props.removeFromCart(props.id)}
          className="uppercase p-1 bg-black rounded hover:bg-white hover:text-black text-white font-bold"
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
