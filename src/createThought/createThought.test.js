import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './CreateThought.js';

describe('CreateThought', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<CreateThought />);
    expect(wrapper).toMatchSnapshot()
  });

  it('updates the state of the title field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'title' } }
    const expectedState = {
      title: 'abc',
      body: ''
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('updates the state of the body field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'body' } }
    const expectedState = {
      title: '',
      body: 'abc'
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
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
    wrapper.setState({title: 'no', body: 'one'})

    // How do we call handleSubmit?
    wrapper.instance().handleSubmit()
    
    // How do we assert that our mock was called with the
    // correct params?
    expect(createThoughtMock).toHaveBeenCalledWith({title: 'no', body: 'one'});
    wrapper.find('.submit-btn').simulate('click')
    expect(wrapper.state()).toEqual(expectedState);
  });

});
