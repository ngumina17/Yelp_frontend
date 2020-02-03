import React, { useState, useEffect } from "react";
import Restraunt_Star from "./Single_Restaurant/Restraunt_Star";
import Catagories from "./Single_Restaurant/Categories";
import Reviews from "./Single_Restaurant/Reviews";
import Price from "./Single_Restaurant/Price";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Single_Restaurant/restraunt.css";
function Restaurant(props) {
  let id = props.match.params.id;
  const [data, setData] = useState({
    data: []
  });
  const [useDataBase, setUseDataBase] = useState({
    useDataBase: false
  });
  const [status, setStatus] = useState({
    status: 200
  });
  function newData(data) {
    setData({ data: data });
  }
  useEffect(() => {
    fetch(`https://opentable.herokuapp.com/api/restaurants/${id}`)
      .then(results => results.json())
      .then(data => {
        setData({ data });
        setUseDataBase({ useDataBase: false });
        setStatus({ status: data.status });
      });
  }, []);
  RunDataBase(id, data);
  function RunDataBase(id, data) {
    if (data === undefined || status.status == 404) {
      //if not in api check our database
      fetch(
        `https://project3-restaurant-finder.herokuapp.com/restaurants/${id}/`
      )
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        
    }
  }
  if (data !== undefined) {
    if (status.status === 404) {
      return (
        <main className="api">
          <img align="right" src={data.images} alt={data.name} />
          <h1>{data.name}</h1>
          <div>
            <h3>{data.address}</h3>
            <h3>{data.city}</h3>
            <h3>{data.state}</h3>
            <h3>{data.postal_code}</h3>
          </div>
          <Link to={`/review/${id}`} className="main-list__link">
            <Button outline color="danger">
              Write a Review
            </Button>
          </Link>
          <Restraunt_Star rating={data.stars} />
          <h5>{data.review_count}</h5>
          <Catagories data={data.categories} />
          <Reviews reviews={data.reviews} />
        </main>
      );
    } else {
      return (
        <main className="api">
          <img align="right" src={data.data.image_url} alt={data.data.name} />
          <h1>{data.data.name}</h1>
          <div className="address">
            <h3>{data.data.address}</h3>
            <h3>{data.data.city}</h3>
            <h3>{data.data.state}</h3>
            <h3>{data.data.postal_code}</h3>
            <h3>{data.data.phone}</h3>
          </div>
          <Link to={`/review/${id}`} className="main-list__link">
            <Button outline color="danger">
              Write a Review
            </Button>
          </Link>
          <Price price={data.data.price} />
        </main>
      );
    }
  } else {
    return <div>loading</div>;
  }
}
export default Restaurant;
