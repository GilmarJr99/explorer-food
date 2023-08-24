import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 29rem;
    height: 4.8rem;
    padding: 0.98rem;
    margin-bottom: 0.625rem;
    margin-left: 1rem;
    border: 0.0625rem solid ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 0.80rem;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};
`;

function Input ({...rest}) {
    return <StyledInput {...rest} />
}

export default Input;