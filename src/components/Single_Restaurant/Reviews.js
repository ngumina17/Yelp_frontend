import React, { useState, useEffect } from 'react';
import Review_Single from './Review_Single'

function Reviews(props) {
    

  //if props are present and there's at least 1 review
    if (props.reviews !== undefined && props.reviews.length !== 0) {
       //map through reviews
            let reviewList = props.reviews.map(i => {
                return (
                    <Review_Single
                        key={i}
                        id={i}
                    />
                )
            }

            )
            return (
                <div className='review'>
                    <h1>Reviews</h1>
                    {reviewList}
                </div>
            )
        

    }
    else {
        return (
            <>
                <h2>Reviews</h2>
                <h4>Sorry This Restraunt hasn't been reviewed yet.</h4>
            </>
        )
    }
}

export default Reviews