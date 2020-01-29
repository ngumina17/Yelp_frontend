import React, { useState } from 'react';
import Header from './components/Header'
import SearchRes from './components/SearchRes'
import Restaurant_form from './components/Restaurant_form'
import Review_Form from './components/Review_form'
import Restaurant from './components/Restaurant'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {

  const [keywords, setKeyWords] = useState({
    keywords: ''
  })
  const [location, setLocation] = useState({
    location: ''
  })
  const [id, setId] = useState({
    id: ''
  })
  const [data, setData] = useState({
    data: []
  })

  function newKeyWords(e) {
    setKeyWords({ keywords: e.target.value })
  }
  function newLocation(e) {
    setLocation({ location: e.target.value })
  }
  function newId(id) {
    setId({ id: id })
  }
  function newData(data) {
    setData({ data: data })
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header
          newKeyWords={newKeyWords}
          newLocation={newLocation}
          keywords={keywords.keywords}
        />
      </header>
      <main>
        <Switch>
          <Route path='/search/:name'
            render={({ props }) => (
              <SearchRes
                keywords={keywords.keywords}
                location={location.location}
                data={data.data}
                newData={newData}
                newId={newId}
              />)} />
          <Route path='/add' component={Restaurant_form} />
          <Route path='/Review' component={Review_Form} />
          <Route path='/Restaurant'
            render={({ props }) => (
              <Restaurant
                keywords={keywords.keywords}
data={data.data}
newData={newData}
                id={id.id}
              />)} 
/>
        </Switch>
      </main>
    </div>
  );

}

}
export default App;
