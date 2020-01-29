import React, { useState, useEffect } from 'react';
import Star from './Single_Restaurant/Star'
import Catagories from './Single_Restaurant/Categories'
import Reviews from './Single_Restaurant/Reviews'
import { Link } from 'react-router-dom'

function Restaurant(props) {

    fetch(`https://project3-restaurant-finder.herokuapp.com/restaurants/${props.id}/`)
        .then(response => response.json())
        .then(data => {
            props.newData(data)
        }
        )
        .catch(err => {
            console.error({ err })
        })

    return (
        <main>
            <Link to={`/Search/${props.keywords}`}> <button>Back</button></Link>
            <img src={props.data.images} alt={props.data.name} />
            <h1>{props.data.name}</h1>
            <div>
                <h3>{props.data.address}</h3>
                <h3>{props.data.city}</h3>
                <h3>{props.data.state}</h3>
                <h3>Zipcode</h3>
            </div>
            <Link to="/Review"><button>Add Review</button></Link>
            <Star />
            <h5>Review Count</h5>
            <Catagories
                data={props.data.categories}
/>
            <Reviews 
reviews={props.data.reviews}
/>
        </main>
    )}




export default Restaurant