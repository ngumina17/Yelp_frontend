import React, {useState} from 'react';
import Restaurant from "./Restaurant"
import { Route, Link } from "react-router-dom";
import SearchResults from "./SearchResults"


function SearchBar (props) {

    const [restaurants, setRestaurants] = useState(props.results.restaurants)

console.log("search bar", props.results.restaurants)
        return (
    
            <>
            <nav id='home'>
                <input id='key' type="text" onChange={props.onChange} className="field request" placeholder="Search Keywords..." name="keyword" />
                <input type="text" onChange={props.onChange} className="field location" placeholder="Search City..." name="location" />
                <Link to="/results" className ="search-button" >Search</Link>
            </nav>
            </>
        )
    }


   
export default SearchBar;