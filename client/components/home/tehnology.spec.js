import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';

import Technology from './Technology.jsx';

describe('<Technology />', () => {
  it('should contain a heading of "Current tech stack of choice"', () => {
    const expected = 'Current tech stack of choice';

    const wrapper = shallow(<Technology />);
    const actual = wrapper.find('h3')
      .first()
      .props()
      .children;

    expect(actual).to.equal(expected);

  });

  it('should contain 6 stack components', () => {
    const expected = 6;

    const wrapper = render(<Technology />);
    const actual = wrapper.find('.service').length;

    expect(actual).to.equal(expected);

  });
});
