import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-17-updated'
import Header from "./Header"


Enzyme.configure({adapter : new Adapter()})


//to test component
it('header ',()=>{
    //create or render comp using shallow
    const h = shallow(<Header/>)

    expect(h.text()).toEqual("BLOGGER DIARIES")

   console.log("hi");

})