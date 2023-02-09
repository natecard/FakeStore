import { Link } from 'react-router-dom';
import Header from './Header';

export default function Home() {
  return (
    <div>
      <Header />
      {/* black background with screen height and overflow hidden */}
      <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
        {/* translate along y axis into space above glow center and padding x axis */}
        <div className="flex translate-y-60 flex-col items-center px-5">
          {/* z index to front gradient background white to gray clip text */}
          <div className="z-50 bg-gradient-to-br from-white via-[#e9f5f2] to-[#354d4b] bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl">
            <h1>
              Built Different. <br />
              Buy Different.
            </h1>
          </div>
        </div>

        <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center">
          <div className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-blue-500 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]"></div>
          <div className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-black to-blue-500 text-white [--conic-position:from_290deg_at_center_top]"></div>
          <div className="absolute top-1/2 h-48 w-full translate-y-12 bg-black blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-blue-500 opacity-50 blur-3xl"></div>
          <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-teal-400 blur-2xl"></div>

          <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-blue-400 blur-sm"></div>
          {/* z index towards front top side of glow bg black with opacity and text clip */}
          <Link
            to="/Products"
            className="absolute inset-auto z-30 h-44 w-full -translate-y-[12.5rem] bg-clip-text bg-black bg-opacity-50"
          ></Link>
        </div>
      </div>
    </div>
  );
}
