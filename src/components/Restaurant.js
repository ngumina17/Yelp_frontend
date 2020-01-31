import React, { useState, useEffect } from 'react';
import Restraunt_Star from './Single_Restaurant/Restraunt_Star'
import Catagories from './Single_Restaurant/Categories'
import Reviews from './Single_Restaurant/Reviews'
import Price from './Single_Restaurant/Price'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import './Single_Restaurant/restraunt.css';

function Restaurant(props) {
    // let id = props.match.params.id
    let id = '5e2c7dee634ff9000422f6dc'
    const [data, setData] = useState({
        data: []
    })
    const [useDataBase, setUseDataBase] = useState({
        useDataBase: false
    })

    function newData(data) {
        setData({ data: data })
    }

    // fetch(`https://opentable.herokuapp.com/api/restaurants/${id}`)
    fetch(`https://project3-restaurant-finder.herokuapp.com/restaurants/${id}/`)
        .then(results => results.json())
        .then(data => {
            setData({ data });
            // console.log(data.status)
        });

    function SeperateApi(results) {
        setUseDataBase(true)
        setData({ data: results })
    }



    //     function RunDataBase(id, results){
    // console.log(results)
    //         if (results == undefined){
    //     console.log('results failed')
    //     fetch(`https://project3-restaurant-finder.herokuapp.com/restaurants/${id}/`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('this is the api data', results)
    //         }
    //         )
    //         .catch(err => {
    //             console.error({ err })
    //         })}
    // else{
    //             setData(results)
    // console.log('results passed')

    //     }
    // }
    //     if (useDataBase.useDataBase === true){

    return (
        <main>

            <img src={data.data.images} alt={data.data.name} />
            <h1>{data.data.name}</h1>
            <div>
                <h3>{data.data.address}</h3>
                <h3>{data.data.city}</h3>
                <h3>{data.data.state}</h3>
                <h3>Zipcode</h3>
            </div>
            <Link to={`/review/${id}`} className="main-list__link">
                <Button outline color="danger">
                    Write a Review
                </Button>
            </Link>
            <Restraunt_Star
                rating={data.data.stars}
            />
            <h5>{data.data.review_count}</h5>
            <Catagories
                data={data.data.categories}
            />
            <Reviews
                reviews={data.data.reviews}
            />
        </main>
    )
    // }
    // else {


    // return (
    //     <main className='api'>

    //         <img align='right' src={data.data.image_url} alt={data.data.name} />
    //         <h1>{data.data.name}</h1>
    //         <div className='address'>
    //             <h3>{data.data.address}</h3>
    //             <h3>{data.data.city}</h3>
    //             <h3>{data.data.state}</h3>
    //             <h3>{data.data.postal_code}</h3>
    //             <h3>{data.data.phone}</h3>
    //         </div>
    //         <Link to={`/review/${id}`} className="main-list__link">
    //             <Button outline color="danger">
    //                 Write a Review
    //             </Button>
    //         </Link>
    //         <Price
    //             price={data.data.price}
    //         />
    //     </main>
    // )

}
// }
export default Restaurant
