import React from 'react'

const SearchBar = () => {
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchText" placeholder="Enter an anime"/>
                <input type="submit" className="searchBtn"/>
            </div>
        </div>
    )
}

export default SearchBar
