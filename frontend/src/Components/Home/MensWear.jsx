import products from '../../data/LatestProduct'
import ProductCard from '../ProductCard'
import salesBanner from '../../assets/slider-banner/sales.jpg'
import { Link } from 'react-router-dom'

const MensWear = () => {
  return <>
    <section className=" my-4 bg-white  py-3 px-5 shadow">
      <div className="row">
        <div className="col-5 py-5">
          <div className="card border-3 border-warning rounded-2">
            <img loading="lazy"  src={salesBanner} style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="col-7">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Mens Wear</h4>
            <Link to='/category' className='text-dark'>
              <i className="bi bi-arrow-right-square-fill fs-4"></i>
            </Link>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
            {products.map((item, index) => <ProductCard key={index} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  </>
}

export default MensWear
