import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Providers from '../Providers';
import Footer from '../Footer';

describe('<Footer />', () => {
  let component

  before(() => {
    component = mount(
      <Providers>
        <Footer />
      </Providers>
    )
  })

  it('should render the component', () => {
    expect(component.length).to.equal(1)
  })
})
