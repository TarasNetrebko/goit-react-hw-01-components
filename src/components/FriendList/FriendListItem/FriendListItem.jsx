import PropTypes from 'prop-types';
import { Image, OnlineIndicator, Li } from "./FriendListItem.styled"

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
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}