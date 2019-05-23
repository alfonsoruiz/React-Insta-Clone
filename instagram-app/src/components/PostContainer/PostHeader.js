import React from 'react';

    const PostHeader = props => {
        return (
            <header className="post-header">
                <img className="header-thumbnail" src={props.thumbnail} alt="header thumbnail"/>
                <h1 className="user-name">{props.username}</h1>
            </header>
        )
    }

export default PostHeader;