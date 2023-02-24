import React from "react";
import { Route, Routes} from "react-router-dom";
import Darkmode from "./components/Darkmode";
// import Hero from "./components/Hero";
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar";
import "./index.css"
import Home from "./routes/Home";


function App() {
  return (
    <>

    <body className="app">
    <div className="absolute w-full right-0 top-0">
    <div className="nav">
            <NavBar />
            <SideBar />
            <Darkmode />
        </div>
    </div>
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
    </body>
        
    </>
  );
}

export default App;
