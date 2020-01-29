import React from 'react'



function FormImg (props) {
    let newImage = props.newImage
    
function handleChange(e) {
        let image = e.target.value
    props.newImage(image)
    }

return(
    <div>
<h2>Image Url</h2>
        <input type="text" placeholder="Image URL" onChange={handleChange} name="search" />
</div>
)}

export default FormImg