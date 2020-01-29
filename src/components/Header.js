import React, { useState, useEffect } from "react";
import SearchKey from "./Header_Components/SearchKey";
import SearchLocation from "./Header_Components/SearchLocation";
import SearchButton from "./Header_Components/SearchButton";
import AddRestaurant from "./Header_Components/AddRestaurant";

function Header(props) {
  return (
    <>
      <nav id="home">
        <Link href="/">
          <img
            src="https://s3-media0.fl.yelpcdn.com/assets/public/default.yelp_design_web.yji-b085a608c15f110ce750ccef3e1e1db0.png"
            alt="yelp"
          />
        </Link>
        <SearchButton />
        <SearchLocation onChange={props.onChange} />
        <SearchKey onChange={props.onChange} />
        <AddRestraunt />
      </nav>
      <style jsx>
        {`
          #search {
            color: red;
          }
        `}
      </style>
    </>
  );
}

export default Header;
