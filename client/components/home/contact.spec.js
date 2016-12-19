import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Contact from './Contact.jsx';

describe('<Contact />', () => {

  it('should have a root element with an id of "contact"', () => {
    const expected = 'contact';
    const wrapper = shallow(<Contact />);
    const actual = wrapper.first().props().id;

    expect(actual).equals(expected);

  });
});
