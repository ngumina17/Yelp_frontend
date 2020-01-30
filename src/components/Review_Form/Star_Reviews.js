import React from 'react';
import '../Form.css';


function Star_Review (props) {
    let newRating = props.newRating

const starsTotal =5 

function stars(e){
    let rating = parseInt(e.target.id)
    newRating(rating)
}

return(
<div className='stars'>

        <div className='rating'>
            <input type='radio' name='star' id='star1' /><label className='after' onClick={stars} id='1' htmlFor='star1'></label>
            <input type='radio' name='star' id='star2' /><label className={`${2 <= props.rating ? 'after' : 'before'}`} onClick={stars} id='2' htmlFor='star2'></label>
            <input type='radio' name='star' id='star3' /><label className={`${3 <= props.rating ? 'after' : 'before'}`} onClick={stars} id='3' htmlFor='star3'></label>
            <input type='radio' name='star' id='star4' /><label className={`${4 <= props.rating ? 'after' : 'before'}`} onClick={stars} id='4' htmlFor='star4'></label>
            <input type='radio' name='star' id='star5' /><label className={`${5 <= props.rating ? 'after' : 'before'}`} onClick={stars} id='5' htmlFor='star5'></label>
</div>
</div>
)}

export default Star_Review