import HomePage from "./Components/HomePage";
import Explore from "./Components/Explore";
import Aboutus from "./Components/Aboutus";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
// import client from "./Components/client";
import './Assets/Explore.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import { AppBar } from "@mui/material";
// import ResponsiveAppBar from "./Pages/ResponAppbar";
// import Dashboard from "./Pages/Dashboard";
// import Loader from "./Components/Loader";


function App() {
  return (
    <>
        <Router>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
          </Routes>
{/* <ResponsiveAppBar/> */}
        {/* <Dashboard/> */}
          <Routes>
              {/* <client/> */}
              <Route path="/Explore" element={<Explore/>}/>
              <Route path="Aboutus" element={<Aboutus/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Logout" element={<Logout/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;