import React from 'react';
import styled from 'styled-components';
import UserName from '../../ReusableStyles/UserName';
import PropTypes from 'prop-types';

const Header = styled.header`
    display: flex;
    padding: 10px;
`;

const Thumbnail = styled.img`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 10px;
`;

const PostHeader = props => {
    return (
        <Header>
            <Thumbnail src={props.thumbnail} alt="header thumbnail" />
            <UserName>{props.username}</UserName>
        </Header>
    );
}

PostHeader.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}

export default PostHeader;