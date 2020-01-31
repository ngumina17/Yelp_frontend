import React from 'react'
import './restraunt.css';

function Price(props) {

    //need to make price visual through price
    return (
        <div className='prices'>

            <div className='rating'>
                <input type='radio' name='price' id='price1' /><label className={`${2 <= props.price ? 'after' : 'before'}`} id='1' htmlFor='price1'></label>
                <input type='radio' name='price' id='price2' /><label className={`${2 <= props.price ? 'after' : 'before'}`} id='2' htmlFor='price2'></label>
                <input type='radio' name='price' id='price3' /><label className={`${3 <= props.price ? 'after' : 'before'}`} id='3' htmlFor='price3'></label>
                <input type='radio' name='price' id='price4' /><label className={`${4 <= props.price ? 'after' : 'before'}`} id='4' htmlFor='price4'></label>
                <input type='radio' name='price' id='price5' /><label className={`${5 <= props.price ? 'after' : 'before'}`} id='5' htmlFor='price5'></label>
            </div>
        </div>
    )
}

export default Price