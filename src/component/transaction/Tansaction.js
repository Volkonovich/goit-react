import React from 'react';
import List from './TransactionData/List';
import PropTypes from 'prop-types';
const Tansaction = ({ itemsNew }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <List items={itemsNew} />
      </tbody>
    </table>
  );
};

export default Tansaction;

Tansaction.propTypes = {
  itemsNew: PropTypes.arrayOf(PropTypes.object),
};
