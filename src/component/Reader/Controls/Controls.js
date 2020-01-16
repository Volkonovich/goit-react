import React from "react";
import PropTypes from "prop-types";
const Controls = props => {
  console.log("[props]", props);
  return (
    <section>
      <button
        onClick={props.onPrevClick}
        type="button"
        disabled={props.publicationIndex === 0}
      >
        Назад
      </button>
      <button
        onClick={props.onNextClick}
        type="button"
        disabled={props.publicationIndex === props.length - 1}
      >
        Вперед
      </button>
    </section>
  );
};

export default Controls;
Controls.propTypes = {
  onPrevClick: PropTypes.func,
  publicationIndex: PropTypes.number,
  onNextClick: PropTypes.func
};
