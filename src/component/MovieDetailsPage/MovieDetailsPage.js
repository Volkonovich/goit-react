import React from "react";
import { Route, Redirect, withRouter, Link, Switch } from "react-router-dom";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const MovieDetailsPage = props => {
  const {
    poster_path,
    title,
    popularity,
    overview,
    genre_ids,
    id
  } = props.currentMovie;
  console.log("props :", props);
  return (
    <div>
      <div>
        <button onClick={() => props.history.push("/")}>back to</button>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>{popularity}</p>
        <h3>overview</h3>
        <p>{overview}</p>
        <h3>genres</h3>
        <p>{genre_ids}</p>
      </div>
      <div>
        <Link onClick={props.getMovieCast} to="/movies/:movieId/cast">
          Cast
        </Link>
        <br />
        <Link to="/movies/:movieId/reviews">Reviews</Link>
      </div>
      <div>
        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />

          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(MovieDetailsPage);
