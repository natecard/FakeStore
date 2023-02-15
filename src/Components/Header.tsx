import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App';
import item from './Interfaces';

export default function Header() {
  const { cartQuantity, cart, cartTotal } = useContext(Context);

  return (
    <div className="z-50 text-[#305d44] font-base subpixel-antialiased p-5 list-none bg-black sticky top-0 ">
      <nav>
        <div className="flex flex-row items-end">
          <Link className="pl-4" to="/Home">
            <img className="h-12 w-36" src="brand-dark.png" alt="" />
          </Link>
          <div className="flex flex-row w-full items-center justify-between">
            <Link
              className="font-base text-2xl tracking-wider px-5 ml-10 cursor-pointer"
              to="/Products"
            >
              <div> Store </div>
            </Link>
            <li className="flex flex-row px-5 py-2 relative bg-gradient-to-b from-white via-[#e9f5f2]  to-[#354d4b] group pr-4 bg-clip-text ">
              <Link to="/ShoppingCart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 stroke-transparent"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              {cartQuantity > 0 ? (
                <div className="text-base font-light">{cartQuantity}</div>
              ) : null}
              <div className="z-50 rounded-lg group-hover:hover:ease-in duration-1000 absolute bg-black opacity-95 right-8 top-7 pt-1 group-hover:block   w-56 hidden">
                <h2 className="hidden group-hover:block text-2xl text-center">
                  Shopping Cart
                </h2>
                <div className="hidden rounded-b-lg group-hover:flex flex-col align-middle items-center font-bold bg-gray-300 py-7">
                  <h2 className="hidden group-hover:flex justify-center">
                    Items: {cartQuantity}
                  </h2>
                  <h2 className="hidden group-hover:flex justify-center">
                    Cart Total: $ {cartTotal}.00
                  </h2>
                  <Link to="/ShoppingCart">
                    <button className="hidden group-hover:flex items-center uppercase mr-3 p-3 bg-black rounded hover:bg-white hover:text-black text-white font-bold">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
