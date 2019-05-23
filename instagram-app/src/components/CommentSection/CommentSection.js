import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            comments: props.comments,
        }
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map(item => (
                    <div className="comment" key={item.id}>
                        <h2 className="comment-user">{item.username}</h2>
                        <p classname="comment-text">{item.text}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default CommentSection;