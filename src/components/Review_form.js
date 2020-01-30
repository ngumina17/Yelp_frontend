import React, { useState, useEffect } from 'react';
import Star_Review from './Review_Form/Star_Reviews'
import Review_Field from './Review_Form/Review_Field'
import { Button } from 'reactstrap';
import './Form.css';
const url = 'https://project3-restaurant-finder.herokuapp.com/restaurants/5e2c7dee634ff9000422f6da'

function Review_Form () {

    const [rating, setRating] = useState({
        rating: 1
    })
    const [text, setText] = useState({
        text: ''
    })

    function newRating (rating) {
        setRating({ rating: rating })
    }
    function newText (text) {
        setText({ text: text })
    }

    function submitReview () {
        console.log(rating)
        fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              mode: "no-cors"
            },
            body: JSON.stringify({
              text: text.text,
              rating: rating.rating,
            })
          })
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(err => console.log(err));

    }
    function handleClick () {
        console.log(rating)
        submitReview()
    }




return(
    <form id='Review'>
        <h1>New Review</h1>
        <Star_Review  
            newRating={newRating}
rating={rating.rating}
/>
        <Review_Field 
            newText={newText}
/>

        <Button color="danger" type="submit">Submit</Button>


    </form>
)}


export default Review_Form