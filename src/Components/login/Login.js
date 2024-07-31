import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { toast } from 'react-toastify';
import axios from 'axios';
import "./login.css"


export const Login = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const { productId, title } = useParams();

  const cu = useSelector(store => store.userSection.cu)
  
  const [Error, setError] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(()=>{
  //     if(cu._id !==undefined){
  //         return move('/error')
  //     }
  // },[cu._id])

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const move = useNavigate()

  const dispatch = useDispatch();

  const Login = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, data);
      let loginUser = response.data;
      if (loginUser) {
        localStorage.setItem('userToken', loginUser.myToken);
        dispatch({
          type: "LOGIN_USER",
          payload: loginUser.user,
        });
        toast.success("Login Succesfull")
        if (loginUser.user.role === "admin") {
          return move('/admin-dashboard');
        } else if (productId) {
          return move(`/product/${title.replace(/ /g, '-')}/${productId}`);
        } else if (!productId) {
          return move("/");
        }
      }
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError("Invalid Credentials")

      }
    }
  };
  return <>
    <div className='container my-5'>
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-6 col-md-6 col-sm-12 border rounded-3 p-lg-5 p-sm-2'>
          <div>
            <p className='title'>Login</p>
          </div>
          <form className="form" action="" onSubmit={handleSubmit(Login)}>
          {Error === "Invalid Credentials" &&
              <div className='error mb-3'> Invalid Credentials </div>
            }
            <div className="flex-column">
              <label>Email *</label>
            </div>
            <div className="inputForm">
              <svg
                height={20}
                viewBox="0 0 32 32"
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                </g>
              </svg>
              <input 
              required="true"
              autocomplete="off"
              type="email"
              placeholder='Enter Your Email'
              className="input w-100" {...register('email', {
                required: true, validate: function (typedValue) {
                  if (typedValue.match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )) {
                    return true;
                  } else {
                    return false;
                  }
                }
              })}/>
              </div>
            <div className="flex-column">
              <label>Password *</label>
            </div>
            <div className="inputForm">
              <svg
                height={20}
                viewBox="-64 0 512 512"
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
              </svg>
              <input
                required="true"
                autocomplete="off"
                placeholder='Enter Your Password'
                type={showPassword ? "text" : "password"}
                className="input w-100"
                {...register('password', { required: true })} />
              {errors.password ? <div className='error'>Password is required </div> : null}
              <span
                className="password-toggle-btn fs-5"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
              <div className="span">Forgot password?</div>
            <button className="button-submit">Login</button>
            <p className="p">
              Don't have an account?  &nbsp;&nbsp;
              {productId && <a href={`/signup/${title}/${productId}`}>
                <span className='register_btn'>
                  Signup
                </span>
              </a>}
              {!productId && <a href="/signup">
                <span className='register_btn'>
                Signup
                </span>
              </a>}
            </p>
          </form>
          {/* <form >
            
              <label className="user-label ">Email *</label>
            <div className="input-group mb-3">
              <div>
              <MdOutlineAlternateEmail />
              <input
                 />
              </div>
              {errors.email ? <div className='error'>Email is required </div> : null}
            </div>
           */}
        </div>
      </div>

    </div>
  </>

}
