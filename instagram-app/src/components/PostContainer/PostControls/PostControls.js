import React from 'react';
import './PostControls.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
`;

const ControlsLeft= styled.div``;

const PostControls = props => {
    return (
        <Wrapper>
            <ControlsLeft>
                <i className="post-controls far fa-heart" onClick={props.incrementLikes}></i>
                <i className="post-controls far fa-comment"></i>
                <i className="post-controls far fa-paper-plane"></i>
            </ControlsLeft>
            <i className="far fa-save"></i>
        </Wrapper>
    );
}

export default PostControls;