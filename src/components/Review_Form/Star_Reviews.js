import React from 'react';
import '../Form.css';


function Star_Review (props) {
    let newRating = props.newRating

const starsTotal =5 

function stars(){
console.log('star')
}

return(
<div>
        <div className='rating'>
            <input type='radio' name='star' id='star1' /><label htmlFor='star1'></label>
            <input type='radio' name='star' id='star2' /><label htmlFor='star2'></label>
            <input type='radio' name='star' id='star3' /><label htmlFor='star3'></label>
            <input type='radio' name='star' id='star4' /><label htmlFor='star4'></label>
            <input type='radio' name='star' id='star5' /><label htmlFor='star5'></label>
</div>
</div>
)}

export default Star_Review