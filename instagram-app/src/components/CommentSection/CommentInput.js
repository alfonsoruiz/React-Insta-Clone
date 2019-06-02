import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form``;

const Input = styled.input`
    margin-top: 15px;
    width: 98.4%;
    height: 50px;
    border-right: none;
    border-left: none;
    border-bottom: none;
    border-top: 1px solid lightgrey;
    padding-left: 10px;
    font-size: 1rem;
`;

const CommentInput = props => {
    return (
        <Form onSubmit={props.addNewComment}>
            <Input
                type="text"
                value={props.comment}
                name="comment"
                placeholder="Add comment..."
                onChange={props.captureComment}
            />
        </Form>
    );
}

CommentInput.propTypes = {
    comment: PropTypes.string.isRequired
}

export default CommentInput