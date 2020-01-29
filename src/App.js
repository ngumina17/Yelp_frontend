import React from 'react';
import SearchBar from "./components/SearchBar"
import "./App.css"


class App extends React.Component{
  constructor(){
    super()
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)

    if (this.state !== null)
    {this.search(this.state.location)}
  }

  search=(query)=>{
    const url = `https://opentable.herokuapp.com/api/restaurants?city=${query}`;
    fetch(url)
      .then(results => results.json())
      .then(res => {console.log(res)
          this.setState({data: res});
      })
  }


render(){
  return (
    <>
     <header className="main-header">
       <div className="main-header__wrapper">
         <div className="nav-wrapper">
            <nav className="main-nav">
            <ul className="main-list">
                <li class="main-list__item"><a href="#" className="main-list__link">Write a Review</a></li>
                <li class="main-list__item"><a href="#" className="main-list__link">Events</a></li>
                <li class="main-list__item"><a href="#" className="main-list__link">Talk</a></li>
           </ul>
        </nav>
        <div className="search-container">
          <div className="search">
            <SearchBar onChange={this.handleChange}/>
          </div>
        </div>
         </div>
       </div>
     </header>
     <footer class="main-footer">
      <small class="copyright">
        <div class="copyright__img-block">
          <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/573fa19c8435/assets/img/structural/footer_cityscape.png" alt="footer img" />
        </div>
        <div class="copyright__text">
          Copyright © 2004-2017 Yelp Inc. 
          Yelp and related marks are 
          registered trademarks of Yelp.
        </div>
      </small>
    </footer>
    </>
      
  )
}

}
export default App;
