import React from 'react';

const ThoughtCard = (props) => {
  return (
    <div className='thought-card'>
      <div className='card-title'>{props.thought.title}
        <button className='x-button' onClick={props.removeThought} data-thoughtid={props.thought.id}>x</button>
      </div>
      <div className='card-body'>{props.thought.body}</div>
    </div>
  )
}

export default ThoughtCard;