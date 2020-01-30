import React from 'react'
import Star from './Star'
import { Link } from "react-router-dom";
const url = 'https://project3-restaurant-finder.herokuapp.com/restaurants/5e2c7dee634ff9000422f6da'

function Review_Single() {
let id = 8
//needs to be props.id

    function deleteReview () {
    
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
    function handleClick () {
        deleteReview()
    }


    //information is sent this is sent back to  Review_Single
    return (
        <div>
            <Star />
            <p>Review text</p>
            <Link href="/"><button type="submit" onClick={deleteReview}>Delete</button></Link>
        </div>
    )
}

export default Review_Single