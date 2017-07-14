import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Providers from '../Providers';
import Header from '../Header';

describe('<Header />', () => {
  let component

  before(() => {
    component = mount(
      <Providers>
        <Header />
      </Providers>
    )
  })

  it('should render the component', () => {
    expect(component.length).to.equal(1)
  })
})
