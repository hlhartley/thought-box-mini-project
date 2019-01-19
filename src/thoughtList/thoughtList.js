import React from 'react';

export const ThoughtList = (props) => {
  let allThoughts = props.thoughtList;
  return (
    <div>
      {
      allThoughts.map((thought) => {
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
