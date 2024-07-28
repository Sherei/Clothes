
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
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
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
}

export default App;
