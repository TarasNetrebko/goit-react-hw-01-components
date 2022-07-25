import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <Li>
            <OnlineIndicator
              style={{ backgroundColor: isOnline ? '#00ff00' : '#ff0000' }}
            ></OnlineIndicator>
            <Image src={avatar} alt="friend's avatar"/>
            <p>{name}</p>
        </Li>
    )
}

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
const Li = styled.li`
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
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}