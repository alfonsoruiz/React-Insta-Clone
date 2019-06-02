import React from 'react';
import styled from 'styled-components';
import UserName from '../../ReusableStyles/UserName';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    padding: 0 15px 0 15px;
    text-align: left;
    line-height: 1.25rem;
    margin-bottom: 7px;
`

const CommentText = styled.span`
    font-weight: 400;
    margin-bottom: 5px;
    margin-left: 7px;
`;

const Comment = props => {
    return (
        <Wrapper>
            <UserName>{props.comment.username}<CommentText>{props.comment.text}</CommentText></UserName>
        </Wrapper>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired
}

export default Comment;