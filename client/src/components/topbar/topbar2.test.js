import React from 'react'
import renderer from 'react-test-renderer'
import TopBar from './TopBar';

import { MemoryRouter } from 'react-router-dom';




test('snapshot test of topbar',()=>{

  const tree=renderer
  .create(
    <MemoryRouter>
      <TopBar/>
    </MemoryRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()


})