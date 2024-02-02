import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/html_part/Navbar';
import Home from './components/html_part/Home';
import Cart from './components/html_part/Cart';
import Health from './components/html_part/Health';
import Login from './components/html_part/Login';
import Footer from './components/html_part/Footer';
import Covid from './components/html_part/Covid';
import Diabetes from './components/html_part/Diabetes';
import Fitness from './components/html_part/Fitness';
import CardiacCare from './components/html_part/CardiacCare';
import Ayurvedic from './components/html_part/Ayurvedic';


function App() {
  return (
    <>
    
    <Navbar/>

        <Routes>
          {/* <Route path="/*" element={<h1>No route found here.</h1>} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/health" element={<Health/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/health/covid" element={<Covid/>} />
          <Route path="/health/diabetes" element={<Diabetes/>} />
          <Route path="/health/fitness" element={<Fitness/>} />
          <Route path="/health/CardiacCare" element={<CardiacCare/>} />
          <Route path="/health/ayurvedic" element={<Ayurvedic/>} />
        </Routes>
    
    <Footer/>

    </>
  );
}

export default App;



// import { lazy, Suspense } from 'react';

// TO reduce the reload
// const Navbar = lazy(()=> import("./components/html_part/Navbar"))
// const Home = lazy(()=> import("./components/html_part/Home"))
// const Cart = lazy(()=> import("./components/html_part/Cart"))
// const Login = lazy(()=> import("./components/html_part/Login"))
// const Footer = lazy(()=> import("./components/html_part/Footer"))
// const Loader = lazy(()=> import("./components/html_part/Loader"))
// const Health = lazy(()=> import("./components/html_part/Health"))


// <Suspense fallback={<Loader/>}>
// </Suspense> 