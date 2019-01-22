import React, { Component } from 'react';

class CreateThought extends Component {
  constructor() {
    super();

  this.state = {
    title: '',
    body: ''
  }
}

  handleChange(e) {
    const { name, value } = e.target
    this.setState({[name]: value})
  }
  
  handleSubmit() {
    e.preventDefault();
    this.props.createThought(this.state);
    this.setState({title: '', body: ''});
    this.clearInputFields();
  }
  
  clearInputFields() {
    document.getElementById('title-input').value = '';
    document.getElementById('body-input').value = '';
  }

  render() {
    const { title, body } = this.state
    return(
      <form className='create-thought-container' onSubmit={this.handleSubmit.bind(this)}>
        Title: <input value={title} type='text' name='title' id='title-input' onChange={this.handleChange.bind(this)}></input>
        Body: <input value={body} type='text' name='body' id='body-input' onChange={this.handleChange.bind(this)}></input>
        <button name='submit' className='submit-btn'>Submit</button>
      </form>
    );
  }
}

export default CreateThought
