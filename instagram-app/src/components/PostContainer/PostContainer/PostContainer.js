import React from 'react';
import Post from '../Post/Post';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostContainer = props => {
    return (
        <Wrapper>
            {props.post.map(item => (
                <Post key={item.id} post={item} />
            ))}
        </Wrapper>
    );
};

PostContainer.propTypes = {
    post: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostContainer;