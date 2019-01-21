import React from 'react';
import { shallow, mount } from 'enzyme';

import ThoughtList from './ThoughtList.js';

describe('ThoughtList', () => {

  it('should match the snapshot with no thoughts', () => {
    const wrapper = shallow(<ThoughtList thoughtList={[]} searchInput={''} removeThought={() => {}}/>);
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot with thoughts', () => {
    const mockThoughts = [
      { 
        body: "hello",
        id: 0,
        title: "hi" 
      },
      { 
        body: "bye",
        id: 1,
        title: "cya" 
      },
    ]
    const wrapper = shallow(<ThoughtList thoughtList={mockThoughts} searchInput={''} removeThought={() => {}}/>);
    expect(wrapper).toMatchSnapshot()
  });

});
