import React from "react";
import { Route, Redirect, withRouter, Link, Switch } from "react-router-dom";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const MovieDetailsPage = props => {
  const {
    original_title,
    poster_path,
    popularity,
    overview,
    genres = [],
    id
  } = props.currentMovie;
  const { getMovieReviews, getMovieCast, cast, history, reviews } = props;
  return (
    <div>
      <div>
        <button onClick={() => history.push("/")}>back to</button>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />
        <h2>{original_title}</h2>
        <p>{popularity}</p>
        <h3>overview</h3>
        <p>{overview}</p>
        <h3>genres</h3>
        <ul>
          {genres.map(elem => (
            <li key={elem.id}>{elem.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link onClick={getMovieCast} to="/movies/:movieId/cast">
          Cast
        </Link>
        <br />
        <Link onClick={getMovieReviews} to="/movies/:movieId/reviews">
          Reviews
        </Link>
      </div>
      <div>
        <Switch>
          <Route
            path="/movies/:movieId/cast"
            render={() => <Cast cast={cast} />}
          />

          <Route
            path="/movies/:movieId/reviews"
            render={() => <Reviews reviews={reviews} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(MovieDetailsPage);
