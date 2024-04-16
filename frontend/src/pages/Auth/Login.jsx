import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/Product/t-shirt.png'
import Layout from '../../Components/Layouts/Layout'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../action/userAction'

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();


  const emailRef = useRef(undefined);
  const passwordRef = useRef(undefined);


  const handleSubmit = (event) => {
    event.preventDefault();


    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const userDetailArray = { email, password };
    dispatch(loginUser(userDetailArray, navigate))

  }
    return <>
      <Layout>
        <section className='container my-5 p-5 rounded-5' style={{ background: 'linear-gradient(to right, #3931af, #00c6ff)', width: '55%' }}>
          <div className='row'>
            <div className='col-lg-4 d-flex flex-column justify-content-center align-items-center text-center text-white mt-3'>
              <img loading="lazy" src={logo} alt='' width="50%" className='mt-5 mb-3' />
              <h3 className='fs-2'>Welcome</h3>
              <p className='fw-lighter p-3 fs-6'>you are 30 second away to buy a product</p>

            </div>
            <div className='col-lg-8 d-flex flex-column justify-content-center align-items-center bg-white  p-5' style={{ borderRadius: "0 50px 0 50px" }}>
              <form className="row g-3 col-lg-9" onSubmit={handleSubmit}>
                <div className='col-lg- text-center'>
                  <h3>Login</h3>
                </div>


                <div className="col-12">
                  <input type="email" className="form-control" placeholder="Enter Email" ref={emailRef} />
                </div>
                <div className="col-12">
                  <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
                </div>


                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Accept Terms & Condition
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center mt-4 ">
                  <button type="submit" className="btn btn-primary  px-5 ">Login</button>
                </div>
                <div className='col-12 text-center fs-6 mt-2'>
                  <span>Not a member ? | <Link to='/signup' className=''>Create new account</Link></span>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  }

export default Login
