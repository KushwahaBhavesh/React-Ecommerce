import React from 'react'

const ProductCard = ({ item }) => {
  return <>
    <div className="col">
      <div className="card card-cover h-100 overflow-hidden bg-white  rounded-3 shadow ">
        <div className="d-flex flex-column h-100 text-dark text-shadow-1">
          <div className="d-flex align-items-center justify-content-center p-2">
            <img loading="lazy"  src={item.imageUrl} alt="" width="250px" />
          </div>
          <h3 className=" text-center fs-2  fw-bold" style={{cursor:"pointer"}}>{item.name}</h3>
          <ul className="d-flex list-unstyled mt-auto justify-content-around align-items-center">
            <li className="d-flex align-items-center me-3">
              <small>{item.category}</small>
            </li>
            <li className="d-flex align-items-center">
              <small>{item.price}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default ProductCard
