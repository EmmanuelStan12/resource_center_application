import styled, { css } from "styled-components";

export const Avatar = styled.img`
    ${props => css`
        width: ${props.size}px;
        height: ${props.size}px;
        border-radius: 50%;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.4);
    `}
`;

export const RoundedImage = styled.img`
    ${props => css`
        border-radius: 10px;
        width: ${props.size}px;
        height: ${props.size}px;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.4);
    `}
`