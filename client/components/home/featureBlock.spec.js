import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import FeatureBlock from './FeatureBlock.jsx';

describe('<FeatureBlock />', () => {
  it('should a root component class of "bounceInLeft"', () => {

    const wrapper = shallow(<FeatureBlock />);
    const actual = wrapper.first().hasClass('bounceInLeft');

    expect(actual).equals(true);

  });
});
