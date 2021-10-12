import React from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import Movie from "./Movie";

// react는 자동적으로 class component의 render method를 실행
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  
  // axios는 기다려야 됨
  getMovies = async () => {
    const {data : {data: { movies }}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  
  componentDidMount(){
    this.getMovies();
  }
  
  render () {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading...": movies.map(movie => {
          return (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
              />
          );
        })}
      </div>
    );
  }
}

export default App;
