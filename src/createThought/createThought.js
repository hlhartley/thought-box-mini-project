import React, { Component } from 'react';

class CreateThought extends Component {
  constructor() {
    super();

  this.state = {
    title: '',
    body: ''
  }
}

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit() {
    this.props.createThought(this.state);
    this.setState({title: '', body: ''})
  }

  render() {
    return(
      <div className='create-thought-container'>
        Title: <input type='text' name='title' className='title' onChange={this.handleChange.bind(this)}></input>
        Body: <input type='text' name='body' className='body' onChange={this.handleChange.bind(this)}></input>
        <input type='submit' name='submit' className='submit-btn' onSubmit={this.handleSubmit.bind(this)}></input>
      </div>
    );
  }
}

export default CreateThought
