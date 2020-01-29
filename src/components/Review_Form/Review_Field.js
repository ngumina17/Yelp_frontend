import React, { Component } from "react";
import axios from 'axios';




class Review_Field extends Component {
    constructor (props) {
        super (props)
        this.state = {
            reviews: []
        }
    }
    componentDidMount () {
        this.getData()
    }

    getData () {
        const url = 'https://project3-restaurant-finder.herokuapp.com/restaurants';
        axios.get(url).then(res => {
            console.log(res.data)
            this.setState({
                reviews: res.data
            })
        })
    }

    handlePut = (id, arrayIndex, currentArray) => {
        
    }

    render() {
        return (
            <div>
                <h1>Restaurant List</h1>
            </div>
        )
    }
}

// function Review_Field(props) {
//     let newText = props.newText

//     function handleChange(e) {
//         let text = e.target.value
//         newText(text)
//     }

// return(
//     <input onChange={handleChange} type="text" />
// )
// }
// export default Review_Field

export default Review_Field