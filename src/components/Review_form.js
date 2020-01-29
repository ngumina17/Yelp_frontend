import React, { useState, useEffect } from 'react';
import Star_Review from './Review_Form/Star_Review'
import Review_Field from './Review_Form/Review_Field'
import Link from 'next/link'

function Review_Form () {

    const [rating, setRating] = useState({
        rating: 0
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
    <nav>
        <Star_Review  
            newRating={newRating}
/>
        <Review_Field 
            newText={newText}
/>
        <Link href="/"><button type="submit">Submit</button></Link>
    </nav>
)}

export default Review_Form