import React, { useRef } from 'react'
import logo from '../../assets/Product/t-shirt.png'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../Components/Layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../action/userAction.js'

const Signup = () => {

  const { loading, error } = useSelector(store => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const nameRef = useRef(undefined);
  const emailRef = useRef(undefined);
  const phoneRef = useRef(undefined);
  const passwordRef = useRef(undefined);
  const confirmPasswordRef = useRef(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const userDetailArray = { name, email, phone, password, confirmPassword };
    dispatch(registerUser(userDetailArray, navigate))



  }


  return (<>
    <Layout>
      <section className='container my-5 p-5 rounded-5' style={{ background: 'linear-gradient(to right, #3931af, #00c6ff)', width: '55%' }}>

        <div className='row'>
          <div className='col-lg-4 d-flex flex-column justify-content-center align-items-center text-center text-white mt-3'>
            <img loading="lazy" src={logo} alt='' width="50%" className='mt-5 mb-3' />
            <h3 className='fs-2'>Welcome</h3>
            <p className='fw-lighter p-3 fs-6'>you are 30 second away to buy a product</p>

          </div>
          <div className='col-lg-8 d-flex flex-column justify-content-center align-items-center bg-white  p-5' style={{ borderRadius: "0 50px 0 50px" }}>

            <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
              <div className="row g-3 w-75">
                <div className='col-lg-12 text-center'>
                  <h4>Create New Account</h4>
                </div>
                <div className="col-lg-12">
                  <input type="text" className="form-control" value="akku" placeholder='First Name' ref={nameRef} />
                </div>
                <div className="col-12">
                  <input type="tel" className="form-control" value="458565" placeholder="Phone Number" required ref={phoneRef} />
                </div>
                <div className="col-12">
                  <input type="email" className="form-control" value="akku@gmail.com" placeholder="xyz@gmail.com" ref={emailRef} required />
                </div>
                <div className="col-12">
                  <input type="password" className="form-control" value="123123" placeholder="Password" ref={passwordRef} />
                </div>
                <div className="col-md-12">
                  <input type="password" className="form-control" value="123123" placeholder='Confirm Password' ref={confirmPasswordRef} />
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Accept Terms & Condition
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center ">
                  <button type="submit" className="btn btn-primary px-5 ">Sign in</button>
                </div>
                <div className='col-12 text-center fs-6 mt-2'>
                  <span>Already a member ? | <Link to='/login' className=''>Login</Link></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout >
  </>)
}

export default Signup
