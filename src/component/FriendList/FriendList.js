import React from 'react';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  // console.log('friends', friends);
  return (
    <ul className={css.friendlist}>
      {friends.map(elem => (
        <FriendListItem info={elem} key={elem.id} />
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
