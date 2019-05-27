import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentControls from './CommentControls';
import Likes from './Likes';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            comments: props.comments,
            likes: props.likes
        };
    }

    addNewComment = event => {
        event.preventDefault();

        this.setState( {
            comments: [
                ...this.state.comments,
                {username: 'Rupert', id: String(this.state.comments.length + 1), text: this.state.comment}
            ], 
            comment: ''
        });
    };

    captureComment = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="comment-section">
                <CommentControls />
                <Likes likes={this.props.likes}/>

                {this.state.comments.map(item => (
                    <Comment comment={item} key={item.id} />
                ))}

                <CommentInput 
                    comment={this.state.comment} 
                    captureComment={this.captureComment}
                    addNewComment={this.addNewComment}
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    likes: PropTypes.number.isRequired
}

export default CommentSection;