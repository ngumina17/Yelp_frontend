import React from 'react'
import SingleResult from './SingleResult'


function Results(props) {
//map through list to reprint all info needed
// 
return(
<>
<h1>Results</h1>
<SingleResult data={props.data}/>
</>
)
}

export default Results