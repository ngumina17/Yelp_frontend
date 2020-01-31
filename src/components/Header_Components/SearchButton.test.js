import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import { Route } from 'react-router-dom'
import SearchButton from "./SearchButton"



describe('SearchButton Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SearchButton />)
    })
    it('Should contain class name searchDiv', () => {
     expect(wrapper.find('div').at(0).hasClass('searchDiv')).toEqual(true)
    })
  })