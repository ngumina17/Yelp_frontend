import React from 'react'
import Star from './Star'
import { Link } from "react-router-dom";
const url = 'https://project3-restaurant-finder.herokuapp.com/restaurants'

function Review_Single(props) {
    //information is sent this is sent back to  Review_Single
    let id = props.id
    //needs to be props.id

    function deleteReview() {

        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                mode: "no-cors"
            },
            body: JSON.stringify({

                _id: id
            })
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }
    function handleClick() {
        deleteReview()
    }

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