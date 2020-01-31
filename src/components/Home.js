import React from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import SearchResults from "./SearchResults";
import { Route, Link, Switch } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state={
        data: []
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);

    if (this.state !== null) {
      this.search(this.state.location);
    }
  };

  search = query => {
    const url = `https://opentable.herokuapp.com/api/restaurants?city=${query}`;
    fetch(url)
      .then(results => results.json())
      .then(res => {
        this.setState({ data: res });
        // console.log(this.state.data.restaurants)
      });
  };

  render() {
    return (
        <>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <header className="main-header">
                <div className="main-header__wrapper">
                  <div className="nav-wrapper">
                    <nav className="main-nav">
                      <ul className="main-list">
                        <li class="main-list__item">
                          <Link to="/review" className="main-list__link">
                            Write a Review
                          </Link>
                        </li>
                        <li class="main-list__item">
                          <Link to="/RestForm" className="main-list__link">
                            Add a Restaurant
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="search-container">
                      <div className="search">
                        <SearchBar
                          onChange={this.handleChange}
                          results={this.state.data}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            )}
          />
          <Route
            exact
            path="/results/"
            render={props => (
              <SearchResults results={this.state.data} {...props} />
            )}
          />
        </Switch>
        <footer class="main-footer">
          <small class="copyright">
            <div class="copyright__img">
              <img
                src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/573fa19c8435/assets/img/structural/footer_cityscape.png"
                alt="footer img"
              />
            </div>
            <div class="copyright__text">
              Copyright © 2020 Yelp 2.0 Inc. Yelp 2.0 and related marks are not
              registered trademarks of Yelp.
            </div>
          </small>
        </footer>
      </>
    );
  }
}
export default Home;
