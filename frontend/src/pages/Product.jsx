
import Layout from "../Components/Layouts/Layout"
import ProductContainer from "../Components/Products/ProductContainer"
import FilterMenu from "../Components/Products/SideBarMenu/FilterMenu"


const Product = () => {
  return <>
    <Layout>
      <div className="d-flex">
        <FilterMenu />
        <ProductContainer />
      </div>
    </Layout>
  </>
}

export default Product
