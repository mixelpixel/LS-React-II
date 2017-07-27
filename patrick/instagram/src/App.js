import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import postData from './application-data.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {postData.map((data, i) => {
          return <PostContainer key={i}
                                thumbnail={data.thumbnailUrl}
                                img={data.imageUrl}
                                username={data.username}
                                comments={data.comments}
                                likes={data.likes}
        	       />
        })}
      </div>
    )
  }
}

export default App;
