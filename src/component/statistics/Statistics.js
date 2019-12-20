import React from 'react';
import css from './Statistics.module.css';
import Card from './card/Card';
import PropTypes from 'prop-types';

const Statistics = ({ items, title }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css.statlist}>
        {items.map(e => {
          return <Card key={e.id} e={e} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
