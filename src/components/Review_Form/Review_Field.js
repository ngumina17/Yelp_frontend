import React, { useState, useEffect } from 'react';



function Review_Field(props) {
    let newText = props.newText

    function handleChange(e) {
        let text = e.target.value
        newText(text)
    }

return(
    <input onChange={handleChange} type="text" />
)
}
export default Review_Field