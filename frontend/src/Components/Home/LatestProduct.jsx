import { Link } from 'react-router-dom';
import products from '../../data/LatestProduct'
import ProductCard from '../ProductCard'

const LatestProduct = () => {
  return (
    <>
      <section className=" my-4 bg-light  py-3 px-5 ">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Latest Product</h4>
          <Link to='/category' className='text-dark'>
            <i className="bi bi-arrow-right-square-fill fs-3"></i>
          </Link>
        </div>
        <div className="row row-cols-1 row-cols-lg-5 align-items-stretch g-4 py-3">
          {products.map((item, index) => <ProductCard key={index} item={item} />)}
        </div>
      </section>
    </>
  );
};

export default LatestProduct;
