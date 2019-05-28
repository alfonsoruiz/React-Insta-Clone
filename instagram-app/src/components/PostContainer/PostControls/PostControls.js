import React from 'react';
import './PostControls.css';

const PostControls = props => {
    return (
        <div className="post-controls">
            <div>
                <i className="far fa-heart" onClick={props.incrementLikes}></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
            </div>
            <i className="far fa-save"></i>
        </div>
    );
}

export default PostControls;