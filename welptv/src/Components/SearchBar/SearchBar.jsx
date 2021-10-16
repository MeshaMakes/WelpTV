import { React } from 'react'
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
    }

    return (
        <form className="searchBox" autoComplete="off" onSubmit={getSearch} style={{margin: props.margin}}>
            <input id="searchTxt" autoComplete="off" className="searchInput" type="text" placeholder="Enter a Series Name"/>
            <button className="searchBtn" href="#">
                <Search/>
            </button>
        </form>
    )
}

export default SearchBar
