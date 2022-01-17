import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<IStyledButtonProps>`
    width: 100%;
    background-color: ${props => (props.styleType === 'white') 
        ? props.theme.colors.light
        : props.theme.colors.dark};
    height: ${props => props.theme.input.height};
    font-weight: ${props => props.theme.font.weight.bold};
    border: none;
    color: ${props => (props.styleType === 'white')
        ? props.theme.colors.dark
        : props.theme.colors.light};
    &:hover, &:focus, &:active {
        background-color: ${props => props.theme.colors.lightgrey};
    }
`;

interface IStyledButtonProps {
    styleType: 'black' | 'white'
}

interface IButtonProps {
    text: string
    styleType: 'black' | 'white'
    onClick: void
}

function Button(props: IButtonProps) {
    return (
        <StyledButton className='Button' styleType={props.styleType} onClick={() => props.onClick}>
            <span className='Button-text'>{props.text}</span>
        </StyledButton>
    )
}

export default Button
