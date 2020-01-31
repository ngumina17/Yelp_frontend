import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'
import AddRestaurant from './Header_Components/AddRestaurant'
import SearchButton from './Header_Components/SearchButton'
import SearchKey from './Header_Components/SearchKey'
import SearchLocation from './Header_Components/SearchLocation'

describe ('Header components', () => {

    let component
    beforeEach(() => {
        component = shallow(<Header />)
    })

//
it('should contain a button', () => {

    expect(component.contains(<AddRestaurant/>).toBe(true))
}

)
})