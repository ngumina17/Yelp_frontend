import React from 'react'
import Results from './Search/Results'



function SearchRes (props) {

if (props.keywords == '' && props.location == ''){
    fetch(`https://project3-restaurant-finder.herokuapp.com/restaurants`)
        .then(response => response.json())
        .then(data => {
            props.newData(data)
        }
        )
        .catch(err => {
            console.error({ err })
        })
}

else if (props.keywords !== '' && props.location !== ''){
console.log('both fields filled')
}



else if (props.keywords !== '' || props.location !== ''){
let searchParam = ''
if (props.keywords !== ''){
    searchParam = props.keywords
}
else(
    searchParam = props.location
)
    console.log(searchParam)

    fetch(`https://project3-restaurant-finder.herokuapp.com/restaurants/${searchParam}/`)
        .then(response => response.json())
        .then(data => {
            props.newData(data)
        }
        )
        .catch(err => {
            console.error({ err })
        })
}


return(
    <div>
        <Results
            data={props.data}
            newId={props.newId}/>

    </div>
)}

export default SearchRes
