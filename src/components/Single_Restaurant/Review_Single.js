import React from 'react'
import Star from './Star'
import { Link } from "react-router-dom";
const url = 'https://project3-restaurant-finder.herokuapp.com/restaurants/5e2c7dee634ff9000422f6da'

function Review_Single(props) {
    //information is sent this is sent back to  Review_Single
    return (
        <div>
            <Star
                rating={3}
            />
            <p>Review text</p>
            <Link href="/"><button type="submit" onClick={deleteReview}>Delete</button></Link>
        </div>
    )
}

export default Review_Single