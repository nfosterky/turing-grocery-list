import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItem from '../lib/components/ListItem';

describe('ListItem', () => {
  it('should render', () => {
    var component = shallow(<ListItem item="oreo" />);

    var p = component.find('p');

    expect(component.contains('oreo')).toEqual(true);
    expect(p.text()).toEqual('oreo');
  });
});
