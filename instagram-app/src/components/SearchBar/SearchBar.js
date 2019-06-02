import React from 'react';
import SearchInput from './SearchInput';
import HeaderControls from './HeaderControls/HeaderControls';
import './SearchBar.css'
import styled from 'styled-components';

const Container = styled.div`
    max-width: 950px; 
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = styled.header`
    border: 1px solid lightgrey;
    margin-bottom: 50px;
    padding: 15px 0;
`;

const LogoHeader = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.h1`
    font-size: 1.5rem;
    margin-left: 20px;
`;

const SearchBar = props => {
    return (
        <Header>
            <Container>
                <LogoHeader>
                    <i className="fab fa-instagram"></i>
                    <Logo>Instagram</Logo>
                </LogoHeader>
                <SearchInput captureInput={props.captureInput} filterPost={props.filterPost} search={props.search} />
                <HeaderControls />
            </Container>
        </Header>
    );
}
export default SearchBar;