import React from "react";
import { Link } from "react-router-dom";

const url = "https://project3-restaurant-finder.herokuapp.com/restaurants";

function FormSubmit(props) {
  //if zip is NaN do not send

  // function handleClick() {
  // console.log(props)
  // }
  //     onClick = { this.handleClick }

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
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function handleClick() {
    post(props);
  }

  return (
    <Link href="/">
      <button onClick={handleClick} type="submit">
        Add Restaurant
      </button>
    </Link>
  );
}

export default FormSubmit;
