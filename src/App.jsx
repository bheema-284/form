import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalState from './context/GlobalState';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css';

const App = (props) => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} exact />
          <Route path="/cart" element={<CartPage />} exact />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
