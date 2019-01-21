import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './CreateThought.js';

const mockEventFactory = (value, name) => {
  return {
    target: {
      value,
      name,
    },
    preventDefault: jest.fn(),
  }
}

describe('CreateThought', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<CreateThought />);
    expect(wrapper).toMatchSnapshot()
  });

  it('updates the state of the title field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = mockEventFactory('abc', 'title');
    const expectedState = {
      title: 'abc',
      body: ''
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('updates the state of the body field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = mockEventFactory('abc', 'body');
    const expectedState = {
      title: '',
      body: 'abc'
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('calls createThought prop function with the data from state as an argument, and input fields go back to empty strings', () => {
    const createThoughtMock = jest.fn();
    const wrapper = shallow(
      <CreateThought createThought={createThoughtMock} />
    );
    const expectedState = {
      title: '',
      body: ''
    };
    wrapper.instance().clearInputFields = jest.fn();
    wrapper.setState({title: 'no', body: 'one'})

    // How do we call handleSubmit?
    wrapper.find('.submit-btn').simulate('click')
    
    // How do we assert that our mock was called with the correct params?
    expect(createThoughtMock).toHaveBeenCalledWith({title: 'no', body: 'one'});
    expect(wrapper.state()).toEqual(expectedState);
    expect(wrapper.instance().clearInputFields).toHaveBeenCalledTimes(1);
  });

});
