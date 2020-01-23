import React, { Component } from "react";
import getData from "../../services/services";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getArray();
  }

  getArray = () => {
    getData().then(data => {
      console.log("data", data);
      this.setState({ data: data });
    });
  };
  render() {
    return (
      <>
        <ul>
          {this.state.data.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}> {item.original_title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
