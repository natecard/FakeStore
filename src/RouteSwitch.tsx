import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ShoppingCart from './Components/ShoppingCart';
import Home from './Components/Home';
import Mac from './Components/Mac';
import Phone from './Components/Phone';
import Pad from './Components/Pad';

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
        <Route path="/Products" element={<App />}></Route>
        {/* <Route path="/iPad" element={<Pad />}></Route>
        <Route path="/iPhone" element={<Phone />}></Route>
        <Route path="/Mac" element={<Mac />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
