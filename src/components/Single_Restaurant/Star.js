import React from 'react'
import '../Form.css';

function Star(props) {
    //need to make star visual through Star
    return (
        <div className='stars'>

            <div className='rating'>
                <input type='radio' name='star' id='star1' /><label className='after' id='1' htmlFor='star1'></label>
                <input type='radio' name='star' id='star2' /><label className={`${2 <= props.rating ? 'after' : 'before'}`} id='2' htmlFor='star2'></label>
                <input type='radio' name='star' id='star3' /><label className={`${3 <= props.rating ? 'after' : 'before'}`} id='3' htmlFor='star3'></label>
                <input type='radio' name='star' id='star4' /><label className={`${4 <= props.rating ? 'after' : 'before'}`} id='4' htmlFor='star4'></label>
                <input type='radio' name='star' id='star5' /><label className={`${5 <= props.rating ? 'after' : 'before'}`} id='5' htmlFor='star5'></label>
            </div>
        </div>
    )
}

export default Star