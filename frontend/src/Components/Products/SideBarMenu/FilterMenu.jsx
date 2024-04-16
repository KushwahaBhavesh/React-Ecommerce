import React from 'react'
import Category from './Category'
import Price from './Price'
import Color from './Color'

const FilterMenu = () => {
  return <>
    <div className="d-flex flex-column flex-shrink-0 p-3  my-2 mx-2" style={{ width: "200px"}}>
      <h3 className='text-center'>Filter</h3>
      <hr />
      <Category />
      <hr />
      {/* <Price/>
      <hr/>
      <Color/> */}
    </div>
  </>
}

export default FilterMenu
