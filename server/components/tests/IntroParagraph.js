import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Providers from '../Providers';
import IntroParagraph from '../IntroParagraph';

describe('<IntroParagraph />', () => {
  let component

  before(() => {
    component = mount(
      <Providers>
        <IntroParagraph />
      </Providers>
    )
  })

  it('should render the component', () => {
    expect(component.length).to.equal(1)
  })
})
