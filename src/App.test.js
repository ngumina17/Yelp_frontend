import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme'
configure({ adapter: new Adapter() })


//Index Test

//App Test
// test('renders Switch statement', () => {

//   expect(<Switch></Switch>);
// });
import { shallow, mount } from 'enzyme'

// describe will run one or more tests
describe('App component', () => {
    let component;
    // before every test makes sure this is loaded
    beforeEach(() => {
        component = shallow(<App />)
    })

    it('renders Home', () => {
        // let component = mount(<Home /> )
        expect(component.contains(<h1></h1>))
    })
})


import { isMainThread } from 'worker_threads';