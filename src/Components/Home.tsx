import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="bg-scroll font-base flex min-h-screen flex-col items-center justify-center tracking-tighter bg-black">
        <div className=" bg-gradient-to-t from-green-700 via-[#e9f5f2] to-[#354d4b] bg-clip-text text-center text-5xl font-base tracking-tighter text-transparent md:text-7xl">
          <Link to="/Products">
            <h1>Welcome to Ethos.</h1>
            <h1>Buy Different.</h1>
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20  text-green-800 scale-150 pt-16 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <p className="text-green-800 bg-[#f3f3f3] font-base p-32">
        At Ethos, we believe that looking good and doing good go hand in hand.
        That's why we offer a range of high-quality, stylish clothing that is
        also environmentally friendly.
        <br />
        <br />
        From organic cotton tops to recycled plastic slides, our clothing is
        made with respect for the planet. Our mission is to create a better
        world, one outfit at a time.
        <br />
        <br />
        When you shop with us, you can feel good knowing that you're making a
        positive impact on the environment. With Ethos, you can look great while
        doing your part for the planet.
        <br />
        <br />
        So why wait? Start shopping our sustainable styles today and join the
        Ethos movement!
      </p>
      <Footer />
    </div>
  );
}
