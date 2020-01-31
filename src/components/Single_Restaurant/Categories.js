import React from 'react'

function Categories(props) {
    //need to map through catagories
    if (props.data !== undefined) {
        let cats = props.data.map(i => {
            return (
                <h3 key={i}>{i}</h3>
            )
        })

        return (
            <div className='catagories'>
                <h2>Categories</h2>
                {cats}
            </div>
        )

    }
    else {
        return (
            <h2>Loading</h2>
        )
    }
}

export default Categories