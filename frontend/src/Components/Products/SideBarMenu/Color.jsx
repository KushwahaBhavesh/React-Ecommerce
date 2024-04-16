import React from 'react'

const Color = () => {
  return <>
<ul className="nav nav-pills flex-column mx-2">
      <span className='fw-bold mb-2'>Color</span>
      <div className='ms-4 '>
        <div className="form-check">
          <label className="form-check-label"> All</label>
          <input className="form-check-input" type="radio" name="Color"  />
        </div>
        <div className="form-check">
          <label className="form-check-label"> Red</label>
          <input className="form-check-input" type="radio" name="Color"  /> 
        </div>
        <div className="form-check">
          <label className="form-check-label"> Green</label>
          <input className="form-check-input" type="radio" name="Color"  />
        </div>
        <div className="form-check">
          <label className="form-check-label"> Blue</label>
          <input className="form-check-input" type="radio" name="Color"  /> 
        </div>
        <div className="form-check">
          <label className="form-check-label"> Black</label>
          <input className="form-check-input" type="radio" name="Color"  />
        </div>
        <div className="form-check">
          <label className="form-check-label">Orange</label>
          <input className="form-check-input" type="radio" name="Color"  /> 
        </div>
        <div className="form-check">
          <label className="form-check-label"> Radium</label>
          <input className="form-check-input" type="radio" name="Color"  /> 
        </div>
      </div>
    </ul>
  </>
}

export default Color
