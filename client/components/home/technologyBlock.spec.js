import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TechnologyBlock from './TechnologyBlock.jsx';

describe('<TechnologyBlock />', () => {

  const defaultAttributes = {
    icon: 'foo',
    blockTitle: 'foo',
    blockText: 'foo'
  };

  it('should a root component class of "bounceInLeft"', () => {

    const wrapper = shallow(<TechnologyBlock {...defaultAttributes} />);
    const actual = wrapper.first().hasClass('bounceInLeft');

    expect(actual).equals(true);

  });
});
