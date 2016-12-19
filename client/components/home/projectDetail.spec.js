import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ProjectDetail from './ProjectDetail.jsx';

describe('<ProjectDetail />', () => {

  const defaultAttributes = {
    imagePath: '../../images/projects/oleg.png',
    imageDescription: 'some random description',
    description: 'Description of the project',
    title: 'Some project title',
    github: 'a github link',
    travis: 'a travis build link',
    codacy: 'a link to the codacy dashboard for the project'
  };

  it('the first child of the root component has a class of "bounceInLeft"', () => {

    const wrapper = shallow(<ProjectDetail {...defaultAttributes} />);
    const actual = wrapper.childAt(0).hasClass('bounceInLeft');

    expect(actual).equals(true);

  });

  it('there is an image tag that has the path that was passed in', () => {

    const wrapper = shallow(<ProjectDetail {...defaultAttributes} />);
    const expected = defaultAttributes.imagePath;

    const actual = wrapper.find('img').props().src;
    expect(actual).equals(expected);

  });

  it('the image tag contains an alt attribute that was passed in', () => {

    const wrapper = shallow(<ProjectDetail {...defaultAttributes} />);
    const expected = defaultAttributes.imageDescription;

    const actual = wrapper.find('img').props().alt;
    expect(actual).equals(expected);

  });  

});
