import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const Post = props => {
    return (
        <div className="post">
            <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
            <img className="post-img" src={props.post.imageUrl} alt="post thumbnail" />
            <CommentSection comments={props.post.comments} likes={props.post.likes}/>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })).isRequired,
        likes: PropTypes.number.isRequired
    })
};

export default Post;