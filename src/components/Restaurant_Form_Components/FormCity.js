import React from 'react'



function FormCity(props) {

    function handleChange(e) {
        let city = e.target.value
        props.newCity(city)
    }
    return (
        <div>
            <h2>City</h2>
            <input type="text" placeholder="City" onChange={handleChange} name="search" />
        </div>
    )
}
export default FormCity