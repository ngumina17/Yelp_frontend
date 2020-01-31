import React from 'react'
import { Link } from 'react-router-dom'


function SearchButton(props){
return(
<div className='searchDiv'>
    <Link href="/Search"><button onClick={props.onChange} type="search" className='searchButton' >Search</button></Link>
   
        {/* <style jsx>{`
        div,
        button {
          height: 50px;
        }
        }
      `}</style> */}

 </div>
)}


export default SearchButton