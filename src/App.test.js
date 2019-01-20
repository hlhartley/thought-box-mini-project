import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
  
let wrapper;
  
describe('App', () => {

beforeEach(() => {
    wrapper = shallow(
    <App />
    );
})

    it('matches the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('renders a thoughtList with the correct props', () => {
        const { thoughtList, searchInput, removeThought } = wrapper.find(ThoughtList).props();
        expect(thoughtList).toEqual([]);
        expect(searchInput).toEqual('');
        // expect(removeThought).toBeInstanceOf(Function);
    });

    it('should have a proper default state', () => {
        expect(wrapper.state()).toEqual({
            searchInput: "", thoughts: [],
        })
    })

    it('createThought adds a thought to state', () => {
        wrapper.instance().createThought()
        expect(wrapper.state()).toEqual({
            searchInput: "", thoughts: [{"id": 0}],
        })
    });
})
// Feel free to add additional tests. These are meant just to get you started.
