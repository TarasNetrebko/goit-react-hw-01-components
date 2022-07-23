// import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const FriendList = friends => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => 
          <li key={id}>
            <span
              style={{ backgroundColor: isOnline ? '#00ff00' : '#ff0000' }}
            ></span>
            <img src={avatar} alt="friend's avatar" />
            <p>{name}</p>
          </li>        
      )}
    </ul>
  );
};
