import React from "react";

function SearchResults (props){
    if (props.length === 0){
        return (<h1> Loading...</h1>)
    }
    console.log(props)
    return (
      <>
    <h1>Results</h1>
    </>
    );
  
      
    
  }
  export default SearchResults;