import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    height: ${props => props.theme.input.height};
    width: ${props => props.theme.input.width};;
`;

interface ISelectProps {
    type: 'chain' | 'token'
    imgSrc: string
    text: string
}


function Select(props: ISelectProps) {
    return (
        <StyledSelect>
            
        </StyledSelect>
    )
}

export default Select;
