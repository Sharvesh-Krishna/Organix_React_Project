import Explore from "./Components/Explore";
import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
// import Sample from "./Components/Sample";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/contact" element={<Contactus/>}/>
          
        </Routes>
      </Router>
      {/* <Sample/> */}

    </div>
  );
}

export default App;
