import React from 'react'



function SearchButton(props){
return(
<div id='search'>
    <Link href="/Search"><button onClick={props.onChange} type="search" >Search</button></Link>
   
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