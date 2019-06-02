import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 30%;
`;

const Input = styled.input`
    height: 15px;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
`;

const SearchInput = props => {
    return (
        <Form onSubmit={props.filterPost}>
            <Input
                type="text"
                value={props.search}
                placeholder="search"
                name="search"
                onChange={props.captureInput}
            />
        </Form>
    );
}

export default SearchInput