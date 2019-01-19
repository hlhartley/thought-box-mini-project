import React from 'react';

export const ThoughtList = (props) => {
  return (
    <div className='thought-list-container'>
      New Thoughts:
      {
      props.thoughtList.map((thought) => {
        return (
          <div className='thought-card'>
            <div className='card-title'>{thought.title}</div>
            <div className='card-body'>{thought.body}</div>
          </div>
        )
      })
    }
    </div>
  );
}
