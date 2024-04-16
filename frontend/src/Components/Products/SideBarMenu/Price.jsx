import React from 'react'

const Price = () => {
  return <>

    <ul className="nav nav-pills flex-column mx-2">
      <span className='fw-bold mb-2'>Price</span>
          <div className='ms-4 '>
        <div className="form-check">
          <label className="form-check-label"> All</label>
          <input className="form-check-input" type="radio" name="Price"  />
        </div>
        <div className="form-check">
          <label className="form-check-label"> below ₹250</label>
          <input className="form-check-input" type="radio" name="Price"  /> 
        </div>
        <div className="form-check">
          <label className="form-check-label"> ₹250 - ₹500</label>
          <input className="form-check-input" type="radio" name="Price"  />
        </div>
        <div className="form-check">
          <label className="form-check-label"> ₹500 - ₹1000</label>
          <input className="form-check-input" type="radio" name="Price"  /> 
        </div>
        <div className="form-check">
          <label className="form-check-label"> ₹1000 - ₹1500</label>
          <input className="form-check-input" type="radio" name="Price"  />
        </div>
        <div className="form-check">
          <label className="form-check-label"> ₹1500 - ₹2000</label>
          <input className="form-check-input" type="radio" name="Price"  /> 
        </div>
        <div className="form-check">
          <label className="form-check-label"> Above ₹2000</label>
          <input className="form-check-input" type="radio" name="Price"  /> 
        </div>
      </div>
    </ul>
  </>
}

export default Price
