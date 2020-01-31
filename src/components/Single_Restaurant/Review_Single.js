import React, { useState } from "react";
import Star from "./Star";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function Review_Single(props) {
  const url = `https://project3-restaurant-finder.herokuapp.com/reviews/${props.id}`;
  //information is sent this is sent back to  Review_Single
  let id = props.id;
  const [data, setData] = useState({
    data: []
  });

  //fetch reviews from the database
  fetch(`https://project3-restaurant-finder.herokuapp.com/reviews/${id}/`)
    .then(results => results.json())
    .then(data => {
      settingVariables(data);
      // console.log(data.status)
    });

  //set the variables
  function settingVariables(data) {
    setData({ data });
  }

  function deleteReview() {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors"
      },
      body: JSON.stringify({
        _id: id
      })
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function handleClick() {
    deleteReview();
  }
  if (data.data === null) {
    return <div>Deleted</div>;
  } else {
    return (
      <div>
        <Star rating={data.data.rating} />
        <p>{data.data.text}</p>
        <Button
          className="delete"
          color="danger"
          type="submit"
          onClick={handleClick}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default Review_Single;
