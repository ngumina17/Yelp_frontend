import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../Form.css";
import { Route, Redirect } from "react-router-dom";

function FormSubmit(props) {
  const url = "https://project3-restaurant-finder.herokuapp.com/restaurants";

  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState("");

  function post(newRestaurant) {
    console.log(newRestaurant);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors"
      },
      body: JSON.stringify({
        name: newRestaurant.name,
        address: newRestaurant.address,
        city: newRestaurant.city,
        state: newRestaurant.state,
        postal_code: newRestaurant.postal_code,
        stars: newRestaurant.stars,
        review_count: newRestaurant.review_count,
        categories: [newRestaurant.categories],
        images: newRestaurant.images
      })
    })
      .then(res => res.json())
      .then(res => {
        setId(res._id);
        setRedirect(true);
      })
      .catch(err => console.log(err));
  }

  function afterPost() {}

  function handleClick() {
    post(props);
  }
  if (redirect) {
    return <Redirect to={`/Restaurant/${id}`} />;
  }
  return (
    <Link href="/">
      <Button color="danger" onClick={handleClick} type="submit">
        Add Restaurant
      </Button>
    </Link>
  );
}

export default FormSubmit;
