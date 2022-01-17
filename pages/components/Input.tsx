import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: ${props => props.theme.input.height};
    width: ${props => props.theme.input.width};
`;

function Input() {
    return (
        <StyledInput type='number'>
            
        </StyledInput>
    )
}

export default Input;
