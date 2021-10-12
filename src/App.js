import React from 'react';
import PropTypes from "prop-types";
import axios from 'axios';

// react는 자동적으로 class component의 render method를 실행
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  
  // axios는 기다려야 됨
  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  }
  
  componentDidMount(){
    this.getMovies();
  }
  
  render () {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading...": "We are ready"}</div>;
  }
}

export default App;
