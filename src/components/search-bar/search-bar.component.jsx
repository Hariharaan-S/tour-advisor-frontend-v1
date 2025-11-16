import React from "react";
import './search-bar.styles.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search locations..." />
            <img src="img/search.png" alt="" />
        </div>
    );
}

export default SearchBar;
