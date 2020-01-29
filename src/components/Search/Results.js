import React from 'react'
import SingleResult from './SingleResult'


function Results(props) {

//map through list to reprint all info needed
    if (props.data.length == 0){
return(
<>
<h1>Results</h1>
<h2>Sorry this doesn't match anything in our database. Please search something else.</h2>
</>
)}

else {
let list =[]
list = props.data.map(i => {
return (
<SingleResult
key={i._id}
    restaurant={i}
        newId={props.newId}
/>
)
},[])
return (
<div>
{list}
  </div>
)
}
}

export default Results