import { Link } from 'react-router-dom';
import Header from './Header';

export default function Home() {
  return (
    <div className="">
      <Header />
      {/* black background with screen height and overflow hidden */}
      <div className="bg-scroll font-base flex min-h-screen flex-col items-center justify-center tracking-tighter bg-black">
        <div className="flex translate-y-72 md:translate-y-48 flex-col items-center px-5">
          <div className="z-50 bg-gradient-to-t from-green-700 via-[#e9f5f2] to-[#354d4b] bg-clip-text text-center text-5xl font-base tracking-tighter text-transparent md:text-7xl">
            <h1>Built Different.</h1>
          </div>
        </div>
        <div className="relative flex w-full flex-1 scale-y-75 md:scale-y-125 items-center justify-center">
          <div className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-green-600 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]"></div>
          <div className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-black to-green-600 text-white [--conic-position:from_290deg_at_center_top]"></div>
          <div className="absolute top-1/2 h-48 w-full translate-y-12 bg-black blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-green-300 opacity-50 blur-3xl"></div>
          <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-green-300 blur-2xl"></div>

          <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-green-500 blur-sm"></div>
          {/* z index towards front top side of glow bg black with opacity and text clip */}
          <div className="absolute inset-auto z-30 h-52 w-full md:-translate-y-[12.5rem] bg-clip-text bg-black bg-opacity-50"></div>
          {/* translate along y axis into space above glow center and padding x axis */}
          <div className="flex translate-y-72 md:translate-y-64 flex-col items-center px-5">
            {/* z index to front gradient background white to gray clip text */}
            <div className="z-50 bg-gradient-to-b font-base from-green-700 via-[#e9f5f2] to-[#354d4b] bg-clip-text text-center text-5xl tracking-tighter text-transparent md:text-7xl">
              <Link to="/Products">
                <h1>Buy Different.</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
