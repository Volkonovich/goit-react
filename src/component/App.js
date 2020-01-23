import React from "react";
// import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";
import Cast from "./MovieDetailsPage/Cast/Cast";
import Reviews from "./MovieDetailsPage/Reviews/Reviews";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
