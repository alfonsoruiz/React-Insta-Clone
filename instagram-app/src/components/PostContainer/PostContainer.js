import React from 'react';
import Post from './Post'
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.post.map(item => (
                <Post key={item.id} post={item}/>
            ))}
        </div>
    );
};

export default PostContainer;