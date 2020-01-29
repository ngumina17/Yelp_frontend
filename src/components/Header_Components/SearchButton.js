import React from 'react'
import { Link } from 'react-router-dom'


function SearchButton(props){
let keywords = 'search'
if (props.keywords !== '') 
{keywords=props.keywords}



return(
<div id='search'>
                <Link to={`/Search/${keywords}`}> <button onClick={props.onChange} type="search" >Search</button> </Link>
 </div>
)}


export default SearchButton