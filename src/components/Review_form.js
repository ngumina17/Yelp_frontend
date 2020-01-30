import React, { useState, useEffect } from 'react';

import Star_Review from './Review_Form/Star_Reviews'
import Review_Field from './Review_Form/Review_Field'
const url = 'https://project3-restaurant-finder.herokuapp.com/restaurants/5e2c7dee634ff9000422f6da'


function Review_Form () {

    const [rating, setRating] = useState({
        rating:0 
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
    <nav>
        <Star_Review  
            newRating={newRating}
/>
        <Review_Field 
            newText={newText}
/>

        <button type="submit" onClick={handleClick}>Submit</button>

    </nav>
)}


export default Review_Form