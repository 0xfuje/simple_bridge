import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const StyledMain = styled.div`
    padding: ${props => props.theme.space.normal};
    background-color: ${props => props.theme.colors.lightgrey};
    .Main {
        &-flex {
            display: flex;
            justify-content: space-between;
            margin-bottom: ${props => props.theme.space.small};
        }
        &-amount {
            &-flex {
                display: flex;
                flex-direction: column;
                &-balance {
                    font-size: ${props => props.theme.font.sizes.small};
                }
            }
        }
        &-receive {
            font-weight: ${props => props.theme.font.weight.bold};
        }
        span {
            display: block;
        }
    }
`;

function Main() {
    return (
        <StyledMain className='Main'>
            <div className="Main-from Main-flex">
                <span>from:</span>
                <Select type='chain' imgSrc='' text='avalanche' />
            </div>
            <div className="Main-send Main-flex">
                <span>send:</span>
                <Select type='token' imgSrc='' text={'USDC'} />
            </div>
            <div className="Main-to Main-flex">
                <span>to:</span>
                <Select type='chain' imgSrc='' text='avalanche' />
            </div>
            
            <div className="Main-amount Main-flex">
                <div className="Main-amount-flex">
                    <span>amount</span>
                    <span className='Main-amount-flex-balance'>balance: 325 USDC</span>
                </div>
                <Input />
            </div>
            <div className="Main-fees Main-flex">
                <span>fees</span>
                <span>0.8 USDC</span>
            </div>
            <div className="Main-receive Main-flex">
                <span>receive</span>
                <span>321 USDC</span>
            </div>
            <Button text='approve USDC' styleType='black' onClick={console.log('hi')} />
        </StyledMain>
    )
}

export default Main;
