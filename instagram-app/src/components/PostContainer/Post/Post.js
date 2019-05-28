import React from 'react';
import PostHeader from '../PostHeader/PostHeader';
import CommentSection from '../../CommentSection/CommentSection';
import PostControls from '../PostControls/PostControls';
import Likes from '../Likes/Likes';
import './Post.css';
import PropTypes from 'prop-types';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    incrementLikes = event => {
        let likes = this.state.likes +1;
        this.setState({ likes: likes });
    }


    render() {
        return (
            <div className="post">
                <PostHeader username={this.props.post.username} thumbnail={this.props.post.thumbnailUrl} />
                <img className="post-img" src={this.props.post.imageUrl} alt="post thumbnail" />
                <PostControls incrementLikes={this.incrementLikes}/>
                <Likes likes={this.state.likes}/>
                <CommentSection comments={this.props.post.comments} likes={this.props.post.likes}/>
            </div>
        );
    }
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