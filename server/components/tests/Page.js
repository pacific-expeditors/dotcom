import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Providers from '../Providers';
import Page from '../Page';

describe('<Page />', () => {
  let component

  before(() => {
    component = mount(
      <Providers>
        <Page />
      </Providers>
    )
  })

  it('should render the component', () => {
    expect(component.length).to.equal(1)
  })
})
