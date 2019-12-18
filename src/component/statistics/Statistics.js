import React from 'react';
import css from './St.module.css';

const Statistics = ({ items, title }) => {
  console.log(items);
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css.statlist}>
        {items.map(e => (
          <li className={css.item} key={e.id}>
            <span className={css.label}>{e.label}</span>
            <span className={css.percentage}>{e.percentage}$</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
