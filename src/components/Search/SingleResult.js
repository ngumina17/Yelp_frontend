import React from 'react'


function SingleResult(props) {
    //map through list to reprint all info needed
    // 
    return (
        <>
        {console.log(props.data)}
        <div>
            <h2>Image</h2>
<Link href = "/Restshow">Restaurant Name</Link>
            
            <h3>Star Count</h3>
            <h3>Street Address</h3>
            <h3>City</h3>
            <h3>State</h3>
            <h3>Zipcode</h3>
        </div>
        </>
    )
}

export default SingleResult