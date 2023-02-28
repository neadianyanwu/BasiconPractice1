import React from "react";
import { Route, Routes} from "react-router-dom";
// import Hero from "./components/Hero";
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar";
import "./index.css"
import Home from "./routes/Home";


function App() {
  return (
    <>

        <div className="nav">
            <NavBar />
            <SideBar />
        </div>
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
        
    </>
  );
}

export default App;
