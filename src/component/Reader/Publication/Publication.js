import React from "react";
import PropTypes from "prop-types";
const Publication = ({ publications, index }) => {
  const arr = publications[index];
  return (
    <article>
      <h2>{arr.title}</h2>
      <p>{arr.text}</p>
    </article>
  );
};

export default Publication;

Publication.propTypes = {
  publications: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string
};
