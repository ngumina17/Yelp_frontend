import React from 'react'
import { Input  } from 'reactstrap';
import '../Form.css';


function FormZipcode (props){
    
    function handleChange(e) {
        let zip = parseInt(e.target.value)
        props.newZip(zip)
    }

return (
    <div>
        <h2 addonType="prepend">Zipcode</h2>
        <Input  type="text" placeholder="Zipcode" onChange={handleChange}  name="search" />
    </div>
)}

export default FormZipcode
