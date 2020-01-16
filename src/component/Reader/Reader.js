import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "./Controls/Controls";
import Progress from "./Progress/Progress";
import Publication from "./Publication/Publication";
import PublicationJS from "../../publications.json";

export default class Reader extends Component {
  state = {
    publicationIndex: 0
  };
  onPrevClick = e => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1
    }));
  };
  onNextClick = e => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1
    }));
  };
  render() {
    return (
      <div>
        <Controls
          onPrevClick={this.onPrevClick}
          onNextClick={this.onNextClick}
          publicationIndex={this.state.publicationIndex}
          length={PublicationJS.length}
        />
        <Progress
          index={this.state.publicationIndex}
          length={PublicationJS.length}
        />

        <Publication
          publications={PublicationJS}
          index={this.state.publicationIndex}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  publicationIndex: PropTypes.string
};
