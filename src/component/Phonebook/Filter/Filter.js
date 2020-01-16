import React from "react";
import PropTypes from "prop-types";
const Filter = ({ getInputValue, searchValue }) => {
  return (
    <>
      <input
        value={searchValue}
        className="SurName"
        type="text"
        onChange={getInputValue}
        placeholder="filter"
      ></input>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  getInputValue: PropTypes.func,
  searchValue: PropTypes.string
};
