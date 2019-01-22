import React from 'react';
import ThoughtCard from './ThoughtCard';

const ThoughtList = (props) => {
  return (
    <div className='thought-list-container'>
      New Thoughts:
      {
      props.thoughtList.map((thought) => {
        if(thought.title.includes(props.searchInput) || thought.body.includes(props.searchInput)){
          return (
            <ThoughtCard key={thought.id} thought={thought} removeThought={props.removeThought}/>
          )
        }
      })
    }
    </div>
  );
}

export default ThoughtList;
