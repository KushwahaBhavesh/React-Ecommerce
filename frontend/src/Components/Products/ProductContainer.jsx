import React from 'react'
import products from '../../data/LatestProduct'
import Card from './card'
import SearchInput from './SearchInput'

const ProductContainer = () => {
  
  return <>  
    <div className='bg-white mb-2 w-100 border-top'>
    <SearchInput/>
      <span className='mx-3 fs-5 fw-semibold'>Recomended</span>
      <div className='m-2 p-2 overflow-y-scroll overflow-x-hidden'>
        <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-5 align-items-stretch g-3 py-3 " style={{ height: "80vh" }}>
          {products.map((item, index) => <Card key={index} item={item} />)}
        </div>
      </div>

    </div>
  </>
}

export default ProductContainer
