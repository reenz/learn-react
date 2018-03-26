import chai from 'chai'
import React from 'react'
import {Hello} from '../src/HelloComponent'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let expect = chai.expect

describe("<Hello/>", () => {
    "use strict";
    it('renders one <h1> tag', ()=>{
        const wrapper = shallow(<Hello />);
        expect(wrapper.find('h1')).to.have.length(1)
    });
})