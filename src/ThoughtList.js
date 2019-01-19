import React from 'react';
import ThoughtCard from './ThoughtCard';

const ThoughtList = (props) => {
  return (
    <div className='thought-list-container'>
      New Thoughts:
      {
      props.thoughtList.map((thought) => {
        return (
          <ThoughtCard thought={thought} removeThought={props.removeThought}/>
        )
      })
    }
    </div>
  );
}

export default ThoughtList;
