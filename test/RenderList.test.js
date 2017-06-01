import React from 'react';
import { shallow, mount } from 'enzyme';
import RenderList from '../lib/components/RenderList';

describe('RenderList', () => {
  var removeFn = function () {};
  var itemList = [
    {
      input: 'oreos',
      id: 1,
    },
    {
      input: 'milk',
      id: 2,
    },
    {
      input: 'beer',
      id: 3,
    },
  ];

  it('should render', () => {
    var component = mount(<RenderList itemCollection={ itemList } remove={ removeFn } />);
    var firstListItem = component.find('ListItem').at(0);

    expect(firstListItem.contains(<p>oreos</p>)).toEqual(true);
  });
});
