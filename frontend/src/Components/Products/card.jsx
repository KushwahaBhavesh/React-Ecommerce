import React from 'react'

const card = ({item}) => {
  return <>
    <div className="col">
      <div className="card card-cover  overflow-hidden rounded-2 shadow" >
        <div className="d-flex flex-column text-dark text-shadow-1">
          <div className="d-flex align-items-center justify-content-center p-1">
            <img loading="lazy"  src={item.imageUrl} alt="" width="120px" />
          </div>
          <h3 className="fs-6 fw-bold ms-3">{item.name}</h3>
          <ul className="d-flex list-unstyled mx-3 justify-content-between align-items-center">
            <li className="d-flex align-items-center me-3">
              <small>{item.category}</small>
            </li>
            <li className="d-flex align-items-center fw-bold">
              <small>₹{item.price}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default card
