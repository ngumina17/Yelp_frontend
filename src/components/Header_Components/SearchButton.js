import React from 'react'
import { Link } from 'react-router-dom'


function SearchButton(props){
return(
<div id='search'>
    <Link to='/Search/:name'> <button onClick={props.onChange} type="search" >Search</button> </Link>
 </div>
)}


export default SearchButton