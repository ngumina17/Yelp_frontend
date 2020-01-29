<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';

>>>>>>> 9c5b5de35e3a9b6186301cc3dea4879c1e083ea0
import Star_Review from './Review_Form/Star_Reviews'
import Review_Field from './Review_Form/Review_Field'


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

        <button type="submit">Submit</button>

    </nav>
)}

export default Review_Form