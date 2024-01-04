import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom'

function Dashboard(){
    const notify=()=> {toast.error("Logout successful!") };

  return (
    <>
    <div className='main hv-100 wv-100 flex flex-col'>
        <div className='appbar hv-5 wv-100 flex theme-bg item-center justify-end '>
            <div className='bartop mx-1'>
                <div className='nav-links'>
            <ul>
        <Link to="/"><li><a href="/Dashboard">Home</a></li></Link>
        <Link to="/Explore"><li><a href="/Explore">Explore</a></li></Link>
        <Link to="/Aboutus"><li><a href="/Aboutus">About us</a></li></Link>
        <Link to="/Login"><li><a href="/Login">Login</a></li></Link> 
        {/* <Link to="/Logout"><li><a href="Logout">Logout</a></li></Link> */}
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
            autoClose={5000}
            // containerStyle={ width='700px' }
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
            </div>
        </div>

        <div className='content-container hv-95 flex flex-row justify-center item-center '>
            <div className='leftbar wv-15 hv-95 theme-bg flex flex-col  '>
                leftbar
            </div>
            <div className='content wv-85 hv-95 justify-center item-center '>
                <div className='wv-80 hv-90'>
                content
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Dashboard;
