// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='aboutme' element={<AboutMe />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}


{/* <CartContextProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<AllProducts />} />
              <Route path=":title" element={<ProductDetails />} />
            </Route>
            <Route path=":category" >
              <Route index element={<Categories />} />
              <Route path=":title" element={<ProductDetails />} />
            </Route>
            <Route path="checkout" element={<Checkout />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </CartContextProvider> */}