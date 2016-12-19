import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Projects from './Projects.jsx';

describe('<Projects />', () => {

  it('should have a root element with an id of "projects"', () => {
    const expected = 'projects';
    const wrapper = shallow(<Projects />);
    const actual = wrapper.first().props().id;

    expect(actual).equals(expected);

  });
});
