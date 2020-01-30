import React, { useState, useEffect } from 'react';
import Star_Review from './Review_Form/Star_Reviews'
import Review_Field from './Review_Form/Review_Field'
import { Button } from 'reactstrap';
import './Form.css';

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
console.log(rating)
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