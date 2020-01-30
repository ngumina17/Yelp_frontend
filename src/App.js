import React from 'react';
import SearchBar from "./components/SearchBar"
import "./App.css"
import { Route, Link, Switch } from "react-router-dom";
import Restaurant_form from "./components/Restaurant_form"
import Review_form from "./components/Review_form"
import Home from "./components/Home"
import SearchResults from "./components/SearchResults"

function App (){
  return (
    <>
    <Switch>
     <Route exact path='/' component={Home} /> 
      <Route exact path='/RestForm' component={Restaurant_form} />
      <Route exact path='/review' component={Review_form} /> 
      <Route exact path="/results" render={props => <SearchResults results={props.results}/>}  />  
    </Switch> 
</>
  );

    
  
}
export default App;
