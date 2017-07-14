import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Contact from '../Contact';

describe('<Contact />', () => {
  let component

  before(() => {
    component = mount(
      <Contact />
    )
  })

  it('should render the component', () => {
    expect(component.length).to.equal(1)
  })
})
