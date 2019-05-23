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
                        <p><span>{item.username}</span> {item.text}</p>
                    </div>
                ))}
                <input placeholder="Add a comment..."/>
            </div>
        );
    }
}

export default CommentSection;