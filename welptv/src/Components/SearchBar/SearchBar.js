import {React, useRef} from 'react'
import { ReactComponent as Search } from "../../Icons/search.svg";
import "./SearchBar.css"

const SearchBar = (props) => {
    const getSearch = (e) => {
        if(e) {
            e.preventDefault();
            let searchVal = e.target.elements.searchTxt.value;

            if(searchVal !== "") {
                props.onSubmitted(searchVal)
            }
        }
        console.log(e.target.elements.searchTxt.value);
    }

    return (
        <form className="searchBox" onSubmit={getSearch}>
            <input id="searchTxt"  className="searchInput" type="text" placeholder="Enter a Series Name"/>
            <button className="searchBtn" href="#">
                <Search/>
            </button>
        </form>
    )
}

export default SearchBar
