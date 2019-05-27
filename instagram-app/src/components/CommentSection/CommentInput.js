import React from 'react';
import PropTypes from 'prop-types'

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

CommentInput.propTypes = {
    comment: PropTypes.string.isRequired
}

export default CommentInput