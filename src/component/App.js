import React, { Component } from "react";
// import "./App.css";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import services from "../services/services";

export default class App extends Component {
  state = {
    movies: [],
    currentMovie: {},
    cast: [],
    reviews: [],
    currentMovieId: null
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    services.getData().then(data => {
      console.log("data", data);
      this.setState({ movies: data });
    });
  };

  getMovieById = e => {
    const [movie] = this.state.movies.filter(
      movie => +movie.id === +e.target.id
    );
    console.log("e.targe", e.target);
    this.setState({ currentMovie: movie, currentMovieId: +e.target.id });
    console.log(" movie", movie);
  };
  getMovieCast = async () => {
    const x = await services.getCasts(this.state.currentMovieId);
    console.log("this.state.currentMovieId", x);
    this.setState({
      cast: x
    });
  };

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/movies">Movies</Link>
        <br></br>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                movies={this.state.movies}
                getMovieById={this.getMovieById}
              />
            )}
          />
          <Route
            path="/movies/:movieId"
            render={() => (
              <MovieDetailsPage
                currentMovie={this.state.currentMovie}
                getMovieCast={this.getMovieCast}
              />
            )}
          />
          <Route
            path="/movies"
            render={() => <MoviesPage data={this.state.movies} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
