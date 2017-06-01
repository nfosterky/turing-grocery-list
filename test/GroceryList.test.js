import React from 'react';
import { shallow, mount } from 'enzyme';
import GroceryList from '../lib/components/GroceryList';

describe('GroceryList', () => {
  it('should render', () => {
    var component = mount(<GroceryList />);
    var input = component.find('input[type="text"]');
    var inputVal = 'oreos';
    var changeEvent = { target: { value: inputVal } };

    input.simulate('change', changeEvent);

    expect(input.prop('value')).toEqual(inputVal);

    var submitButton = component.find('input[type="submit"]');
    submitButton.simulate('click');

    expect(input.prop('value')).toEqual('');
    expect(component.state('listItems')[0].input).toEqual('oreos');

    expect(component.contains(<p>oreos</p>)).toEqual(true);
  });
});
