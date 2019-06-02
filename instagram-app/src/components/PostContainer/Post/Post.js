import React from 'react';
import PostHeader from '../PostHeader/PostHeader';
import CommentSection from '../../CommentSection/CommentSection';
import PostControls from '../PostControls/PostControls';
import Likes from '../Likes/Likes';
import styled from 'styled-components';
// import './Post.css';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 700px;
    border: 1px solid lightgrey;
    margin-bottom: 50px;
`;

const PostImage = styled.img`
    width: 100%;
    height: auto;
`;

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    incrementLikes = () => {
        this.setState(prevState => {
            this.setState({ likes: prevState.likes + 1 });
        });
    }

    render() {
        return (
            <Wrapper>
                <PostHeader username={this.props.post.username} thumbnail={this.props.post.thumbnailUrl} />
                <PostImage src={this.props.post.imageUrl} alt="post thumbnail" />
                <PostControls incrementLikes={this.incrementLikes}/>
                <Likes likes={this.state.likes}/>
                <CommentSection comments={this.props.post.comments} likes={this.props.post.likes}/>
            </Wrapper>
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