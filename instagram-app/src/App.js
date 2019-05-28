import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data : dummyData,
    }
  }

  componentDidMoun() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer post={this.state.data}/>
      </div>
    );
  }
}

export default App;