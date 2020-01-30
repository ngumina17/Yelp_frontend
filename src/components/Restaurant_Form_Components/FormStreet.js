import React from 'react'
import { Input } from 'reactstrap';
import '../Form.css';


function FormStreet (props){
    function handleChange(e) {
        let address = e.target.value
        props.newAddress(address)
    }
return(
    <div>
        <h2>Street Address</h2>
        <Input type="text" placeholder="Street Address" onChange={handleChange} name="search" />
    </div>
)
}
export default FormStreet