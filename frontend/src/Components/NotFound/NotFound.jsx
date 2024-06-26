import { Link } from 'react-router-dom'

import './NotFound.css'
import Layout from '../Layouts/Layout'

const NotFound = () => {
  return <>
    <Layout>
      <div className='d-flex justify-content-center mb-5'>
        <div className=' d-flex justify-content-center notfound-content'>
          <h1>404</h1>
          <span>oops! Page not Found</span>
          <p>sorry, the page you're looking, that does'nt exist. </p>
          <Link to="/" className='btn btn-primary px-5 rounded-1'>Return Home</Link>
        </div>
      </div>
    </Layout>
  </>
}

export default NotFound
