import React from 'react'



function FormZipcode (props){
    
    function handleChange(e) {
        let zip = parseInt(e.target.value)
        props.newZip(zip)
    }

return (
    <div>
        <h2>Zipcode</h2>
        <input type="text" placeholder="Zipcode" onChange={handleChange}  name="search" />
    </div>
)}

export default FormZipcode
