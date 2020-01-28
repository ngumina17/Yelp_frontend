import React from 'react';
import Header from './components/Header'
import SearchRes from './components/SearchRes'
import Restaurant_form from './components/Restaurant_form'
import Review_Form from './components/Review_form'
import Restraunt from './components/Restaurant'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Switch>
          <Route path='/search/:name' component={SearchRes} />
          <Route path='/Add' component={Restaurant_form} />
          <Route path='/Review' component={Review_Form} />
          <Route path='/Restraunt' component={Restraunt} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
