import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App';

export default function Header() {
  const { cart } = useContext(Context);
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
            <li className="flex flex-row bg-gradient-to-b from-white via-[#e9f5f2]  to-[#354d4b] pr-4 bg-clip-text">
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
              {cart.length > 0 ? <div>{cart.length}</div> : null}
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
