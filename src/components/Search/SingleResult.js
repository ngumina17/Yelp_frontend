import React from 'react'
import { Link } from 'react-router-dom'
function SingleResult(props) {
    //map through list to reprint all info needed
    return (
        <>
            <div id={props.restaurant._id}>
                <img src={props.restaurant.images} alt={props.restaurant.name} />
                <Link to="/Restaurant">
                    <h3 id={props.restaurant._id}
                        onClick={(e) => {
                            let id = (e.target.id)
                            props.newId(id)
                        }}>
                        {props.restaurant.name}
                    </h3></Link>
                <h3>Star Count</h3>
                <h3>Street Address</h3>
                <h3>{props.restaurant.city}</h3>
                <h3>{props.restaurant.state}</h3>
                <h3>{props.restaurant.postal_code}</h3>
            </div>
        </>
    )
}
export default SingleResult