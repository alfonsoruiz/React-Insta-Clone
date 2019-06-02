import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LikeCounter = styled.p`
    font-weight: bold;
    padding-left: 15px;
`;

const Likes = props => {
    return(
        <LikeCounter>Likes {props.likes}</LikeCounter>
    );
}

Likes.propTypes = {
    likes: PropTypes.number.isRequired
}

export default Likes;