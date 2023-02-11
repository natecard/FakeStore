import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import Home from './Components/Home';
import Products from './Components/Products';
import App from './App';

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
