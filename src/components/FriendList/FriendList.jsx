import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
  return (
    <Section>
    <List>
        {friends.map(({ avatar, name, isOnline, id }) =>
          <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}>            
          </FriendListItem>
      )}
      </List>
      </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
}
const Section = styled.section`
  margin-top: 50px;
  width: 516px;
  display: flex;
  justify-content: center;
`
const List = styled.ul`
  width: 153px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
`