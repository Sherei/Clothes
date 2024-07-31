import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import SingleAdd from './Components/SinglePage/SingleAdd';
import { Cart } from "./Components/cart/Cart"
import Checkout from './Components/Checkout/Checkout';
import Orderplaced from './Components/Placed/Orderplaced';
import UserPanel from './Components/UserPanel/UserPanel';
import OrderDetail from './Components/OrderDetail/OrderDetail';
import Sidebar from './Components/Dashboard/Sidebar';
import { AddProduct } from './Components/Dashboard/AddProduct';
import AddBlog from './Components/Dashboard/AddBlog';
import AllBlog from './Components/Blog/AllBlog';
import SingleBlog from './Components/Blog/SingleBlog';

import {Login} from "./Components/login/Login"
import Signup from "./Components/Signup/Signup"
import {Error} from "./Components/Error/Error"
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './App.css';

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    try {
      axios.post(`${process.env.REACT_APP_BASE_URL}/session-check`, { token: localStorage.getItem('userToken') }).then((res) => {
        if (res.data) {
          dispatch({
            type: 'LOGIN_USER',
            payload: res.data,
          });
        }
      });
    } catch (e) {

    }
  }, []);


return <>

    <BrowserRouter>
      <Navbar   />
          <Routes>
          <Route exact path='/' element={<Home />} />
              {/*  User */}
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/signup/:title/:productId' element={<Signup />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/login/:title/:productId' element={<Login />} />
              <Route exact path='/user-profile/:userId' element={<UserPanel />} />

              {/* Products */}
              <Route exact path='/admin-dashboard-add-product' element={<AddProduct />} />
              <Route exact path='/admin-dashboard-add-product/:productId' element={<AddProduct />} />
              <Route exact path='/Products' element={<Products />} />
              <Route path='/product/:title/:productId' element={<SingleAdd />} />
              <Route exact path='/Products/:prodctName' element={<Products />} />

              {/* Cart */}
              <Route exact path='/cart/:userId' element={<Cart />} />
              <Route exact path='/cart-checkout/:userId' element={<Checkout />} />

              {/* Order */}
              <Route path='/placed' element={<Orderplaced />} />
              <Route path='/order-placed/:userId' element={<Orderplaced />} />
              <Route path='/order-detail/:OrderId' element={<OrderDetail />} />

              {/* Admin */}
              <Route exact path='/admin-dashboard' element={<Sidebar />} />

              {/* Blog */}
              <Route exact path='/admin-dashboard-add-blog' element={<AddBlog />} />
              <Route exact path='/admin-dashboard-add-blog/:blogId' element={<AddBlog />} />
              <Route path='/blog_detail/:blogId' element={<SingleBlog />} />
              <Route path='/all-blog' element={<AllBlog />} />
              <Route exact path='*' element={<Home />} />
              
      </Routes>
      <Footer/>
    </BrowserRouter>
    <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />

  </>
}

export default App;
