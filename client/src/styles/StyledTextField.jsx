import styled, { css } from "styled-components";

const StyledTextField = styled.div.attrs(props => ({
    type: 'text'
}))`
    ${props => css`
        padding: 10px 12px;
        border-radius: 10px;
        display: block;
        flex: 1;
        display: flex;
        justify-items: center;
        align-items: center;
        width: 100%;
        gap: 4px;
        & > input {
            outline: none;
            border: 0;
            font-size: 14px;
            font-family: "Poppins";
            width: 100%;
            display: flex;
            flex: 1;
        }
    `}
`;

export const OutlinedTextField = styled(StyledTextField)`
    border: 1px solid rgba(0, 0, 0, 0.8);
    background: transparent;
`;

export const DefaultTextField = styled(StyledTextField)`
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    background: transparent;
`;