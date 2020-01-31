import React, { useState, useEffect } from 'react';
import Star from './Single_Restaurant/Star'
import Catagories from './Single_Restaurant/Categories'
import Reviews from './Single_Restaurant/Reviews'
import { Link } from 'react-router-dom'

function Restaurant(props) {
let id = props.match.params.id
    const [data, setData] = useState({
        data: []
    })

    fetch(`https://opentable.herokuapp.com/api/restaurants/${id}`)
        .then(results => results.json())
        .then(res => {
            console.log('this is the response',res );     
        });


    // fetch(`https://project3-restaurant-finder.herokuapp.com/restaurants/${props.id}/`)
    //     .then(response => response.json())
    //     .then(data => {
    //         props.newData(data)
    //     }
    //     )
    //     .catch(err => {
    //         console.error({ err })
    //     })

    return (
        <main>

            <img src={data.images} alt={data.name} />
            <h1>{data.name}</h1>
            <div>
                <h3>{data.address}</h3>
                <h3>{data.city}</h3>
                <h3>{data.state}</h3>
                <h3>Zipcode</h3>
            </div>
            <Link to={`/review/${id}`} className="main-list__link">
                Write a Review
                          </Link>
            <Star />
            <h5>Review Count</h5>
            <Catagories
                data={data.categories}
/>
            <Reviews 
                reviews={data.reviews}
/>
        </main>
    )}




export default Restaurant
