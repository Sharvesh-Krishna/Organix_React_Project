import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../Assets/Homepage.css"
import {Link} from 'react-router-dom'

const Homepage = () => {
  const notify=()=> {toast.error("Logout successful!") };
  return (
    <div class ="image">
      <section>
        <header>
            <nav>
                <div class="nav-links">
            <ul>
        <Link to="/"><li><a href="/HomePage">Home</a></li></Link>
        <Link to="/explore"><li><a href="/Explore">Explore</a></li></Link>
        <Link to="/about"><li><a href="/Aboutus">Contact us</a></li></Link>
        <Link to="/login"><li><a href="/Login">Login</a></li></Link>            
<li>
      <div className="btn-container">
        <input type='submit'
          className="out-btn"
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
            </nav>
            <div class="text-box">
                <h1>ORGANIX</h1>
                <p>"Cultivate your green oasis with our gardening store, where every seed of inspiration blossoms into vibrant landscapes."   </p>
                <a href="/Explore" class="main-btn">Explore more</a>
            </div>
        </header>
    </section>

    </div>
  );
}

export default Homepage;