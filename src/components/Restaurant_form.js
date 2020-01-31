import React, { useState, useEffect } from "react";
import FormImg from "./Restaurant_Form_Components/FormImg";
import FormName from "./Restaurant_Form_Components/FormName";
import FormState from "./Restaurant_Form_Components/FormState";
import FormStreet from "./Restaurant_Form_Components/FormStreet";
import FormZipcode from "./Restaurant_Form_Components/FormZipcode";
import FormCity from "./Restaurant_Form_Components/FormCity";
import FormSubmit from "./Restaurant_Form_Components/FormSubmit";
import './Form.css';
import { Link } from "react-router-dom";

function Restaurant_form(props) {
    const [name, setName] = useState({
        name: ''
    })
    const [address, setAddress] = useState({
        address: ''
    })
    const [city, setCity] = useState({
        city: ''
    })
    const [state, setState] = useState({
        state: ''
    })
    const [zip, setZip] = useState({
        zip: 0
    })
    const [rating, setRating] = useState({
        rating: 0
    })
    const [text, setText] = useState({
        text: ''
    })
    const [image, setImage] = useState({
        image: ''
    })

    function newImage(image) {
        setImage({ image: image })
    }
    function newRating(rating) {
        setRating({ rating: rating })
    }
    function newText(text) {
        setText({ text: text })
    }
    function newZip(zip) {
        setZip({ zip: zip })
    }
    function newCity(city) {
        setCity({ city: city })
    }
    function newState(state) {
        setState({ state: state })
    }
    function newName(name) {
        setName({ name: name })
    }
    function newAddress(address) {
        setAddress({ address: address })
    }

    return (
        <form id='restraunt'>
            <h1>Add a Restaurant</h1>
            <FormImg newImage={newImage} />
            <FormName newName={newName} />

            <FormCity
                newCity={newCity}
            />

            <FormState
                newState={newState}
            />
            <FormStreet
                newAddress={newAddress}
            />
            <FormZipcode
                newZip={newZip}
            />

            <FormSubmit
                name={name.name}
                address={address.address}
                city={city.city}
                image={image.image}
                state={state.state}
                zip={zip.zip}
                text={text.text}
                rating={rating.rating}
            />
        </form>
    )
}

export default Restaurant_form