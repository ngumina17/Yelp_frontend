import React from 'react'



function FormName (props) {

     handleChange =(e)=>{
        let name = e.target.value
        props.newName(name)
    }

return(
    <div>
        <h2>Form Name</h2>
        <input type="text" placeholder="Form Name" onChange={handleChange} name="search" />
    </div>
)}

export default FormName