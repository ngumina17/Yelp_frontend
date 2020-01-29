import React from 'react'


function SearchKey (props) { 

return(
    <input id='key' type="text"  onChange={props.onChange} placeholder="Search Keywords..." name="keyword" />
)}
export default SearchKey