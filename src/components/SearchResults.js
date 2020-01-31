import React from "react";
import "../App.css";


function SearchResults (props){

    return (
        <React.Fragment>
            {props.database?
            <div className="wrapper">
            <div className="image-wrapper">
                <img src={props.database['images']} width="298px" height="180px"  />
            </div>
            <h1 className="restaurant__name">{props.database["name"]}</h1>
            <h6>{props.database["address"]}</h6>
            <h6>{props.database["city"]}, {props.database["state"]}</h6>
            <div className="price-wrapper">
                    <span className="price">Stars: (0-100): {props.database["stars"]}</span>
            </div>  
            </div> : null}
        <React.Fragment/>
  
        {props.data.restaurants.map(item => {
        
    
        
        return(
            
            <>
            <div className="wrapper">
            <div className="image-wrapper">
                <img src={item.image_url} width="298px" height="180px"  />
            </div>
            <h1 className="restaurant__name">{item.name}</h1>
            <h6>{item.address}</h6>
            <h6>{item.city}, {item.state}</h6>
            <div className="price-wrapper">
                    <span className="price">Price: {item.price==1? <div>$</div>:null}{item.price==2?<div>$$</div>: null}{item.price==3?<div>$$$</div>: null}{item.price==4?<div>$$$$</div>: null}{item.price==5?<div>$$$$$</div>: null}</span>
            </div>  
            </div> 
      </>   
        )}
    )}
     </React.Fragment> 
    );
  }

  export default SearchResults;