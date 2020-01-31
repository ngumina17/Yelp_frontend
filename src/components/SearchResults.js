import React from "react";
import { Link } from 'react-router-dom'
import "../App.css";

function SearchResults (props){
    if (props.length === 0){
        return (<h1> Loading...</h1>)
    }
    console.log(' this is single result', props.results)
    return (
      <>
        <React.Fragment>
        {props.results.restaurants.map(item => {
        return(
            <>
            <div className="image-wrapper">
                <img src={item.image} width="298px" height="180px"  />
            </div>
            <Link to={`/Restaurant/${item.id}`}><h1>{item.name}</h1></Link>
            <h6>{item.address}</h6>
            <h6>{item.city}, {item.state}</h6>
            <div className="price-wrapper">
                    <span className="price">Price: (0-5): {item.price}</span>
            </div>   
      </>   
        )}
    )}
     </React.Fragment> 
    </>
    );

    
  }
  export default SearchResults;