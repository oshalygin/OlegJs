import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Intro from './Intro.jsx';

describe('<Intro />', () => {

  it('should have a root element with an id of "intro"', () => {
    const expected = 'intro';
    const wrapper = shallow(<Intro />);
    const actual = wrapper.first().props().id;

    expect(actual).equals(expected);

  });
});
