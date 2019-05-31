import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data : [],
      search: '',
      filterdArray: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  captureInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // filterPost = event => {
    
  // }

  render() {
    return (
      <div className="App">
        <SearchBar captureInput={this.captureInput} filterPost={this.filterPost}/>
        <PostContainer post={this.state.data} />
      </div>
    );
  }
}

export default App;