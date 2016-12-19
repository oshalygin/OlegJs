import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SourceProfile from './SourceProfile.jsx';

describe('<SourceProfile />', () => {

  it('should have a root element with an id of "profile-contact"', () => {

    const expected = 'profile-contact';
    const wrapper = shallow(<SourceProfile />);
    const actual = wrapper.first().props().id;

    expect(actual).equals(expected);

  });
});
