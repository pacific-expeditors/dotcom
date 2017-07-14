import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Providers from '../Providers';
import Map from '../Map';

describe('<Map />', () => {
  let component

  before(() => {
    component = mount(
      <Providers>
        <Map />
      </Providers>
    )
  })

  it('should render the component', () => {
    expect(component.length).to.equal(1)
  })
})
