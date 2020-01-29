import React, { useState, useEffect } from 'react';


function SearchBar (props) {

        return (
            <>
            <nav id='home'>
                <input id='key' type="text" onChange={props.onChange} className="field request" placeholder="Search Keywords..." name="keyword" />
                <input type="text" onChange={props.onChange} className="field location" placeholder="Search Location..." name="location" />
                <button className ="search-button" onClick={props.onChange}>Seach</button>
            </nav>
            </>
        )
    }


   
export default SearchBar;