import React from 'react'

function Categories(props) {
    //need to map through catagories
    let list = []
    if (props.data == undefined) {
return(
        <div>Loading ...</div>)
    }
    else {
        let catagories = props.data.map(i => {
            list.push(<h1>{i}</h1>)
        })
    }
    return (
        <div>
            <h2>Categories</h2>
            {list}
        </div>
    )
}

export default Categories