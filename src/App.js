
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import {Login} from "./Components/login/Login"
import Signup from "./Components/Signup/Signup"
import Footer from './Components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return <>

    <BrowserRouter>
      <Navbar   />
          <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products   />} />
        <Route exact path='/login' element={<Login   />} />
        <Route exact path='/signup' element={<Signup   />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
}

export default App;
