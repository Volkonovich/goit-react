import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import css from "./../Styles/styls.css";
import Button from "./Button/Button";
import Loader from "react-loader-spinner";
import axios from "axios";

const api_key = "14452774-766286a273532ef73a45b39e7";

export default class Gallary extends Component {
  state = {
    dataApi: [],
    isModalOpen: false,
    id: null,
    object: {},
    search: "",
    page: 1,
    isLoading: false
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      if (prevState.search !== this.state.search) {
        this.setState({ dataApi: [], page: 1 });
      }
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }

  openModal = e => {
    console.log("e.target.id", e.target.id);
    const [object] = this.state.dataApi.filter(item => item.id == e.target.id);
    this.setState({ isModalOpen: true, id: e.target.id, object: object });
  };
  getSearchValue = e => {
    this.setState({ search: e.target.value });
  };
  getData = () => {
    this.setState({
      isLoading: true
    });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=${api_key}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => {
        this.setState(state => ({
          page: state.page + 1,
          dataApi: [...state.dataApi, ...data.data.hits]
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getData();
  };

  handleLoad = e => {
    this.getData();
  };

  render() {
    console.log("this.state.dataApi", this.state.dataApi);
    const { isLoading } = this.state;

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
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        <Button handleLoad={this.handleLoad} />
      </div>
    );
  }
}
