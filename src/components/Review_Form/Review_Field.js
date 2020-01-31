import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import '../Form.css';


function Review_Field(props) {
    let newText = props.newText

    function handleChange(e) {
        let text = e.target.value
        newText(text)
    }

return(
    <Input id='field' onChange={handleChange} type="textarea"  />
)
}
export default Review_Field