import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post">
            <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
            <img className="post-img" src={props.post.imageUrl} alt="post thumbnail" />
            <CommentSection comments={props.post.comments} likes={props.post.likes}/>
        </div>
    )
}

export default Post;