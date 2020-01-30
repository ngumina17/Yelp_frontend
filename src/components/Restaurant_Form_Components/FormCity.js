import React from 'react'
import { Input } from 'reactstrap';
import '../Form.css';


function FormCity(props) {

    return (
        <div>
            <h2>City</h2>
            <Input type="text" placeholder="City" name="search" />
        </div>
    )
}
export default FormCity