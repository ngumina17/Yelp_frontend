import React from 'react'
import './restraunt.css';

function Restraunt_Star(props) {
    //need to make star visual through Star
    let rating = Math.round(props.rating / 20)
    return (
        <div className='stars'>

            <div className='rating'>
                <input type='radio' name='star' id='star1' /><label className={`${1 <= rating ? 'after' : 'before'}`} id='1' htmlFor='star1'></label>
                <input type='radio' name='star' id='star2' /><label className={`${2 <= rating ? 'after' : 'before'}`} id='2' htmlFor='star2'></label>
                <input type='radio' name='star' id='star3' /><label className={`${3 <= rating ? 'after' : 'before'}`} id='3' htmlFor='star3'></label>
                <input type='radio' name='star' id='star4' /><label className={`${4 <= rating ? 'after' : 'before'}`} id='4' htmlFor='star4'></label>
                <input type='radio' name='star' id='star5' /><label className={`${5 <= rating ? 'after' : 'before'}`} id='5' htmlFor='star5'></label>
            </div>
        </div>
    )
}

export default Restraunt_Star