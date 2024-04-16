import products from '../../data/LatestProduct'
import salesBanner from '../../assets/slider-banner/sales.jpg'
import ProductCard from '../ProductCard'
import { Link } from 'react-router-dom'

const KidsWear = () => {
  return <>
    <section className="my-4 bg-light py-3 px-5">
      <div className="row">
        <div className="col-7">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Kids Wear</h4>
            <Link to='/category' className='text-dark'>
              <i className="bi bi-arrow-right-square-fill fs-4"></i>
            </Link>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
            {products.map((item, index) => <ProductCard key={index} item={item} />)}
          </div>
        </div>
        <div className="col-5 py-5">
          <div className="card border-3 border-warning rounded-2">
            <img loading="lazy"  src={salesBanner} style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default KidsWear


{/* <section className=" my-3 bg-white  py-3 px-5">
<div className="d-flex justify-content-between align-items-center">
  <h4>Kids Wear</h4>
  <i className="bi bi-arrow-right-square-fill fs-4"></i>
</div>

  
  {/* <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div> */}
// </div> */}