import "./SearchBar.css";

import React from "react";
import { Search } from "react-basicons";

const SearchBar = () => {
  return (
    <div className="search-bar">
        <form action="" className="search-box">
          <Search />
          <input type="text" placeholder="Search 326 icons" />
        </form>
    </div>
  )
}

export default SearchBar;