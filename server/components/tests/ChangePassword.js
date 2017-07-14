import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Providers from '../Providers';
import ChangePassword from '../ChangePassword';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('<ChangePassword />', () => {
  let component

  before(() => {
    component = mount(
      <Providers>
        <ChangePassword />
      </Providers>
    )
  })

  it('should render the component', () => {
    expect(component.length).to.equal(1)
  })
})
