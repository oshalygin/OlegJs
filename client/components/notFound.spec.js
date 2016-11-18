import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NotFound from './NotFound.jsx';

describe('<NotFound />', () => {
    it('should have a description of the message, "404" displayed', () => {
        const expected = '404 Page Not Found';

        const wrapper = shallow(<NotFound />);
        const actual = wrapper.find('h4').text();

        expect(actual).to.equal(expected);

    });

    it('should have a link to navigate back to the root', () => {

        const expected = ' Go back to homepage ';
        const wrapper = shallow(<NotFound />);

        const actual = wrapper.find('Link').props().children;

        expect(actual).to.equal(expected);

    });
});
