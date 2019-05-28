import React from 'react';
import Comment from './Comment/Comment';
import CommentInput from './CommentInput/CommentInput';
import './CommentSection.css';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            comments: props.comments
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