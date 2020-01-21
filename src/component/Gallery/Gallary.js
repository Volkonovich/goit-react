import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import css from "./../Styles/styls.css";
import Button from "./Button/Button";
import axios from "axios";

const api_key = "14452774-766286a273532ef73a45b39e7";

export default class Gallary extends Component {
  state = {
    dataApi: [],
    isModalOpen: false,
    id: null,
    object: {},
    search: "",
    page: 1
  };
  // componentDidMount() {
  //
  // }

  openModal = e => {
    console.log("e.target.id", e.target.id);
    const [object] = this.state.dataApi.filter(item => item.id == e.target.id);
    this.setState({ isModalOpen: true, id: e.target.id, object: object });
  };
  getSearchValue = e => {
    this.setState({ search: e.target.value });
  };
  getData = () => {
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=${api_key}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => {
        this.setState(state => ({
          dataApi: data.data.hits,
          page: state.page + 1
        }));
      });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.getData();
  };

  handleLoad = e => {
    this.getData();
    const newImages = this.state.dataApi;
    this.setState(state => ({
      page: state.page + 1,
      dataApi: [...state.dataApi, ...newImages]
    }));
  };

  render() {
    console.log("this.state.dataApi", this.state.dataApi);
    return (
      <div className={css.App}>
        <Searchbar
          search={this.state.search}
          getSearchValue={this.getSearchValue}
          handleSubmit={this.handleSubmit}
        />

        <ImageGallery
          object={this.state.object}
          images={this.state.dataApi}
          openModal={this.openModal}
          isModalOpen={this.state.isModalOpen}
          id={this.state.id}
        />
        <Button handleLoad={this.handleLoad} />
      </div>
    );
  }
}
