import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from '../lib/components/Controls';

describe('Controls', () => {

  it('controls should execute passed in function when button is clicked', () => {
    const mockFn = jest.fn();
    const component = shallow(<Controls handleClick={mockFn} />);
    var button = component.find('input[type="submit"]');
    button.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1)
  });
});
