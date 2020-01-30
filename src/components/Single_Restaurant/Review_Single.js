import React from 'react'
import Star from './Star'
import { Link } from "react-router-dom";


function Review_Single(props) {
    //information is sent this is sent back to  Review_Single
    return (
        <div>
            <Star
                rating={3}
            />
            <p>Review text</p>
            <Link href="/"><button>Delete</button></Link>
        </div>
    )
}

export default Review_Single