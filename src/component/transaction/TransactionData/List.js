import React from 'react';
import css from '../Transaction.module.css';
import PropTypes from 'prop-types';

const List = ({ items }) => {
  return items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
};

export default List;

List.defaultProps = {
  type: 'null transaction',
  amount: '0',
  currency: 'any',
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
