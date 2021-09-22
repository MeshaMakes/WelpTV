import React from 'react'
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className="wrap">
            <div className="search">
                <input className="searchText" type="text" name="searchText" placeholder="Enter an anime"/>
                <button className="submitBtn" type="submit" name="submitBtn">
                Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar
