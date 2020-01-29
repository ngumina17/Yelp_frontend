import React from 'react'
import { Link } from 'react-router-dom'


function AddRestaurant () {
return( 
   <Link to='/add'>  <button type="submit">Add Restaurant</button></Link>
)
}

export default AddRestaurant