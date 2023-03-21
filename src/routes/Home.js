import React from 'react';
import Hero from '../components/Hero';
// import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import './Home.css'


const Home = () => {
  return (
    <div className="home-container">
      <div className="main-content-container">
        <NavBar/>
        <Hero />
        {/* <SearchBar /> */}
      </div> 
      <div className="sidebar-content-container">
        <SideBar/>
      </div>
    </div>
  );
};

export default Home;