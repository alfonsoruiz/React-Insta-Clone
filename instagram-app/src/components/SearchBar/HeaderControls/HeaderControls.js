import React from 'react';
import './HeaderControls.css';
import styled from 'styled-components';

const Wrapper = styled.div``;

const HeaderControls = props => {
    return (
        <Wrapper>
            <i className="header-controls far fa-compass"></i>
            <i className="header-controls far fa-user"></i>
            <i className="header-controls far fa-heart"></i>
        </Wrapper>
    );
}

export default HeaderControls;