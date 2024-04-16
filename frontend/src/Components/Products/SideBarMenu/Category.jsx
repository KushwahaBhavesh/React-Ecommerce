import React, { useState } from 'react'

const Category = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return <>
    <ul className="nav nav-pills flex-column mx-2  dropdown">
      <div className='d-flex justify-content-between'>
        <span className='fw-bold mb-2'>Category</span>
        <button className='border-0 bg-white' onClick={handleToggle}>
          {isOpen ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
        </button>
      </div>
      {isOpen && (
        <div className='ms-4'>
          <div className="form-check">
            <label className="form-check-label"  ></label>
            <input className="form-check-input" type="radio" name="Category" /> All
          </div>
          <div className="form-check">
            <label className="form-check-label"  ></label>
            <input className="form-check-input" type="radio" name="Category" /> Sneakers
          </div>
          <div className="form-check">
            <label className="form-check-label"  ></label>
            <input className="form-check-input" type="radio" name="Category" /> Shoes
          </div>
          <div className="form-check">
            <label className="form-check-label"  ></label>
            <input className="form-check-input" type="radio" name="Category" /> Sandles
          </div>
          <div className="form-check">
            <label className="form-check-label"  ></label>
            <input className="form-check-input" type="radio" name="Category" /> Flats
          </div>
          <div className="form-check">
            <label className="form-check-label"  ></label>
            <input className="form-check-input" type="radio" name="Category" /> Heals
          </div>
        </div>
      )}
    </ul>
  </>
}

export default Category
