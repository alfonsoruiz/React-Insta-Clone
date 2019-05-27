import React from 'react';

const CommentInput = props => {
    return (
        <form onSubmit={props.addNewComment}>
            <input 
                type="text"
                value={props.comment}
                name="comment"
                placeholder="Add comment..."
                onChange={props.captureComment}
            />
        </form>
    )
}

export default CommentInput