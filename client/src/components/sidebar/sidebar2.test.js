import React from 'react'
import renderer from 'react-test-renderer'
import Sidebar from './Sidebar';

import { MemoryRouter } from 'react-router-dom';




test('snapshot test of Sidebar',()=>{

  const tree=renderer
  .create(
    <MemoryRouter>
      <Sidebar/>
    </MemoryRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()


})