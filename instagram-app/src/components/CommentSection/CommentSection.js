import React from 'react';
import './CommentSection.css';

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
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
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

export default CommentSection;