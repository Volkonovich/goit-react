import React from 'react';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ info }) => {
  const { avatar, name, isOnline } = info;
  console.log(info);

  return (
    <li className={css.item}>
      <span className={isOnline ? css.green : css.red}></span>
      <img className={css.avatar} src={avatar} alt="" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.defaultProps = {
  avatar: 1,
  name: 'not name',
};

FriendListItem.propTypes = {
  info: PropTypes.shape({
    avatar: PropTypes.string,
    id: PropTypes.any.isRequired,
    name: PropTypes.string,
  }),
};
