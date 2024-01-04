import React from 'react';
import {Link} from 'react-router-dom'
import '../Assets/Explore.css'
// import GrassIcon from '@mui/icons-material/Grass';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const products = [
  { id: 1, name: 'Watering Can', price: '$12.50', image: 'https://cdn.shopify.com/s/files/1/0813/0828/7252/products/OrganicBazar-Watering-Can5-1.jpg?v=1694167711&width=360' },
  { id: 2, name: 'Gardening Gloves', price: '$6.75', image: 'https://cdn.shopify.com/s/files/1/0813/0828/7252/products/Garden-Gloves-with-Claws-for-Digging-Planting-4.jpg?v=1694168893&width=360' },
  { id: 3, name: 'Gardening Cutter', price: '$22.50', image: 'https://organicbazar.net/cdn/shop/products/purple-Multipurpose-Gardening-Cutter-Scissor-Hand-Pruner-2.jpg?v=1694167834&width=360'},
  { id: 4, name: 'Fork & Trowel', price: '$17.55', image: 'https://www.nationbloom.com/wp-content/uploads/2023/11/garden-tool-kit-for-soil-cultivation.jpg' },
  { id: 5, name: 'Plant Pot', price: '$24.99', image: 'https://www.ugaoo.com/cdn/shop/files/AImageWithPlant_17e64143-480c-49af-ae61-43cfcf584282.jpg?v=1689239821&width=375' },
  { id: 6, name: 'Wheel Barrow', price: '$30.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirx8b8Knqb6K2bEVulzuIFPToJHMum-gi0w&usqp=CAU' },
];

function Explore() {

  const notify = () => toast.error("Logout Successful");
  const Notify = () => toast.success("Purchase Successful");

  return (
    <>
    <div className="Products">
      
      <div className="sidebar">
        <h2>  ORGANIX</h2>
        <ul>

        <Link to="/"><li><a href="/">Home</a></li></Link>
        <Link to="/"><li><a href="/">Contact us</a></li></Link>
        <Link to="/about"><li><a href="/">About us</a></li></Link>
        {/* <Link to="/home"><li><a href="/">Logout</a></li></Link> */}
        <li>
      <div className="btn-container">
        <input type='submit'
          className="success-btn"
          value='Logout'
          onClick={notify}
          style={{ width: '50px', height: '30px', background:'none', fontSize:'14.5px'}}
        />
        </div>
</li>
        <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />   
        </ul>
      </div>

      <div className="main-content">
        <div className='products-show'>
        <div className='show-1'>  </div>
        
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={Notify} > Buy </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Explore;