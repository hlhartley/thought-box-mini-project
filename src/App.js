import React, { Component } from 'react';
import './CSS/main.scss';
import CreateThought from './createThought/CreateThought';
import ThoughtList from './ThoughtList';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: JSON.parse(localStorage.getItem('thought')) || []
    };
  }

  createThought = (thought) => {
    const { thoughts } = this.state
    const newThought = {...thought, id: thoughts.length}
    this.setState({ thoughts: [...thoughts, newThought] }, 
      () => localStorage.setItem('thought', JSON.stringify(this.state.thoughts))
    );
  }

  removeThoughts() {
    localStorage.removeItem('thought', JSON.stringify(this.state.thoughts))
  }

  removeThought(e) {
    let filteredThoughts = this.state.thoughts.filter(function(thought) { 
      return thought.id !== parseInt(e.target.dataset.thoughtid)
    })
    this.setState({thoughts: filteredThoughts})
    this.removeThoughts();
    localStorage.setItem('thought', JSON.stringify(filteredThoughts))
  }

  render() {
    return (
      <div className="app">
        <Header />
        <CreateThought createThought={this.createThought} />
        <div className='thought-list-container'>
          <ThoughtList thoughtList={this.state.thoughts} removeThought={this.removeThought.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
