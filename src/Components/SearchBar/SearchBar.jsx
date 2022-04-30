import { React } from 'react'
import { ReactComponent as Search } from "../../Icons/search.svg";
import "./SearchBar.css"

const SearchBar = ({ onSubmitted, margin}) => {
    const getSearch = (e) => {
        if(e) {
            e.preventDefault();
            let searchVal = e.target.elements.searchTxt.value;

            if(searchVal !== "") {
                onSubmitted(searchVal)
            }
        }
    }

    return (
        <form className="searchBox" autoComplete="off" onSubmit={getSearch} style={{margin: margin}}>
            <input id="searchTxt" autoComplete="off" className="searchInput" type="text" placeholder="Enter a Series Name"/>
            <button className="searchBtn" href="#">
                <Search/>
            </button>
        </form>
    )
}

export default SearchBar
