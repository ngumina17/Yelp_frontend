import React from "react";

const url = "https://project3-restaurant-finder.herokuapp.com/restaurants";

function FormSubmit(props) {
  //if zip is NaN do not send

  function post(newRestaurant) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newRestaurant.name,
        address: newRestaurant.address,
        city: newRestaurant.city,
        state: newRestaurant.state,
        postal_code: newRestaurant.postal_code,
        stars: newRestaurant.stars,
        review_count: newRestaurant.review_count,
        categories: [
          {
            type: newRestaurant.type
          }
        ],
        images: newRestaurant.images
      })
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function handleClick() {
    post(props);
  }

  return (
    <Link href="/">
      <button onClick={handleClick} type="submit">
        Add Restraunt
      </button>
    </Link>
  );
}

export default FormSubmit;
