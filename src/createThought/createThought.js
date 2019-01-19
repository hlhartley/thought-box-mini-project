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
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit() {
    this.props.createThought(this.state);
    document.getElementById('title-input').value = '';
    document.getElementById('body-input').value = '';
  }

  render() {
    return(
      <div className='create-thought-container'>
        Title: <input type='text' name='title' id='title-input' onChange={this.handleChange.bind(this)}></input>
        Body: <input type='text' name='body' id='body-input' onChange={this.handleChange.bind(this)}></input>
        <input type='submit' name='submit' className='submit-btn' onClick={this.handleSubmit.bind(this)}></input>
      </div>
    );
  }
}

export default CreateThought
