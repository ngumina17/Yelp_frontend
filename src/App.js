import React from 'react';
import SearchBar from "./components/SearchBar"
import "./App.css"
import { Route, Link, Switch } from "react-router-dom";
import Restaurant_form from "./components/Restaurant_form"
import Review_form from "./components/Review_form"
import Home from "./components/Home"
import Restraunt from "./components/Restaurant"
import SearchResults from "./components/SearchResults"

function App() {

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Restaurant/:id' component={Restraunt} />
        <Route exact path='/results' component={Home} />
        <Route exact path='/RestForm' component={Restaurant_form} />
        <Route exact path='/review/:id' component={Review_form} />
      </Switch>
    </>
  );



}
export default App;
