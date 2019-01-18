import React, { Component } from 'react';
import './CSS/main.scss';
import CreateThought from './createThought/CreateThought';
import { ThoughtList } from './thoughtList/ThoughtList';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: []
    };
  }

  createThought = (thought) => {
    const { thoughts } = this.state
    const newThought = {...thought, id: thoughts.length}
    this.setState({ thoughts: [...thoughts, newThought] });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <CreateThought createThought={this.createThought} />
        <div>
          <ThoughtList thoughtList={this.state.thoughts} />
        </div>
      </div>
    );
  }
}

export default App;
