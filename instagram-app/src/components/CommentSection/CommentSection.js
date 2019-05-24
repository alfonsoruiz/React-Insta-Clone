import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            comments: props.comments,
            likes: props.likes
        }
    }

    render() {
        return (
            <div className="comment-section">
                <div className="comment-controls">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <p className="post-likes">Likes {this.state.likes}</p>
                </div>

                {this.state.comments.map(item => (
                    <div className="comment" key={item.id}>
                        <p><span>{item.username}</span> {item.text}</p>
                    </div>
                ))}
                <input placeholder="Add a comment..."/>
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    likes: PropTypes.number.isRequired
}

export default CommentSection;