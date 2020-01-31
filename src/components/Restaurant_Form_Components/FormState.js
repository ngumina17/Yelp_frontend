import React from 'react'
import { Input } from 'reactstrap';
import '../Form.css';


function FormState(props) {

    function handleChange(e) {
        let state = e.target.value
        props.newState(state)
    }

return(
    <div>
        <h2>State</h2>
        <Input type="text" onChange={handleChange} placeholder="State" name="search" />
    </div>
)
}
export default FormState