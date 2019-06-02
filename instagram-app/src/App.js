import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
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

  filterPost = event => {
    event.preventDefault();
    console.log('filterPost triggered')
    const post = this.state.data.filter(post => {
      return post.username === this.state.search;
    });
    this.setState({ 
      filterdArray: post, 
      search: ''
    });
  }



  render() {
    return (
      <div className="App">
        <SearchBar captureInput={this.captureInput} filterPost={this.filterPost} search={this.state.search}/>
        <PostContainer post={(this.state.filterdArray.length < 1) ? this.state.data : this.state.filterdArray}
        />
      </div>
    );
  }
}

export default App;