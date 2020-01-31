import React from 'react'
import Star from './Star'
import { Link } from "react-router-dom";
const url = 'https://project3-restaurant-finder.herokuapp.com/restaurants/5e2c7dee634ff9000422f6da'

function Review_Single(props) {
    //information is sent this is sent back to  Review_Single
    let id = props.id
    let rating = 0
    let text = ''
    
//fetch reviews from the database
    fetch(`https://project3-restaurant-finder.herokuapp.com/reviews/${id}/`)
        .then(results => results.json())
        .then(data => {
            settingVariables( data );
            // console.log(data.status)
        });

//set the variables
function settingVariables(data){
text = data.text
rating = data.rating
}


    function deleteReview(props) {

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
                rating={rating}
            />
            <p>{text}</p>
            <Link to="/"><button type="submit" onClick={deleteReview}>Delete</button></Link>
        </div>
    )
}

export default Review_Single