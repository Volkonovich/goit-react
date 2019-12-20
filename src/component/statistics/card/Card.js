import React from 'react';
import css from './Card.module.css';
import PropTypes from 'prop-types';

const Card = ({ e: { label, percentage } }) => {
  return (
    <li className={css.listItem}>
      <span>{label}</span>
      <span>{percentage}$</span>
    </li>
  );
};

export default Card;

Card.defaultProps = {
  label: 'defolt',
  percentage: 0,
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
