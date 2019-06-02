import React from 'react';
import './HeaderControls.css';
import styled from 'styled-components';

const Wrapper = styled.div``;

const HeaderControls = props => {
    return (
        <Wrapper>
            <i className="far fa-compass"></i>
            <i className="far fa-user"></i>
            <i className="far fa-heart"></i>
        </Wrapper>
    );
}

export default HeaderControls;