import React from 'react'

import { Link } from 'react-router-dom'



function FormSubmit (props) {
//if zip is NaN do not send

// function handleClick() {
// console.log(props)
// }
//     onClick = { this.handleClick }


function handleClick() {
console.log(props)
}

return(
    <Link href="/"><button onClick={handleClick} type="submit">Add Restraunt</button></Link>

)}

export default FormSubmit