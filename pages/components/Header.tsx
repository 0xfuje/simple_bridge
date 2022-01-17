import styled from 'styled-components';
import Button from './Button';

const StyledHeader = styled.div`
    margin-bottom: ${props => props.theme.space.small};
    .Header {
        &-title {
            font-size: ${props => props.theme.font.sizes.large};
            color: ${props => props.theme.colors.light};
            font-weight: ${props => props.theme.font.weight.regular};
            margin-bottom: ${props => props.theme.space.tiny};
        }
    }
`;

function Header() {
    const handleConnect = () => {
        console.log('hullo');
    }
    return (
        <StyledHeader className='Header'>
            <h1 className='Header-title'>simple_bridge</h1>
            <Button text='connect wallet' styleType="white" onClick={handleConnect()}/>
        </StyledHeader>
    )
}

export default Header
