import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FriendList = props => {
  return (
    <Section>
    <List>
      {props.friends.map(({ avatar, name, isOnline, id }) => 
          <Item key={id}>
            <OnlineIndicator
              style={{ backgroundColor: isOnline ? '#00ff00' : '#ff0000' }}
            ></OnlineIndicator>
            <Image src={avatar} alt="friend's avatar"/>
            <p>{name}</p>
          </Item>
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
const Item = styled.li`
  padding: 10px;
  min-width: 200px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  box-shadow: 1px 4px 11px 3px rgba(0,0,0,0.66);
  border-radius: 10px;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  transition-duration: 300ms;
`
const Image = styled.img`
  margin-right: 30px;
  width: 80px;
  height: 80px;
`
const OnlineIndicator = styled.span`
  margin-right: 15px;
  display: block;
  width: 10px;
  height:10px;
  border: 1px solid #000000;
  border-radius: 50%;
`