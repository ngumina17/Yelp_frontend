import React from 'react';
import Restaurant from "./Restaurant"
import { Route, Link } from "react-router-dom";


function SearchBar (props) {

        return (
            <>
            <nav id='home'>
                <input id='key' type="text" onChange={props.onChange} className="field request" placeholder="Search Keywords..." name="keyword" />
                <input type="text" onChange={props.onChange} className="field location" placeholder="Search Location..." name="location" />
                <Link to className ="search-button" onClick={props.onChange}>Seach</Link>
            </nav>
            </>
        )
    }


   
export default SearchBar;