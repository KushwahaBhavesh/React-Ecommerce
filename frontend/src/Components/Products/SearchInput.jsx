import React from 'react'

const SearchInput = () => {
  return <>
    <div className='container-fluid ' style={{ margin: "1rem 0 1rem 0" }}>
        <div className="form position-relative d-flex" style={{ width: '30%' }} >
          <input type="text" className="form-control rounded-3 ps-3 border-2" placeholder="search" />
          <button className="btn position-absolute end-0 p-0 px-2" type="submit"><i className="bi bi-search fs-4"></i></button>
        </div>
      </div>
  </>
}

export default SearchInput
