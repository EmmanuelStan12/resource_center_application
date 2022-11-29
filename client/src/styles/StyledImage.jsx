import styled, { css } from "styled-components";

export const Avatar = styled.img`
    ${props => css`
        width: ${props.size}px;
        height: ${props.size}px;
        border-radius: 50%;
        object-fit: cover;
    `}
`;

export const RoundedImage = styled.img`
    ${props => css`
        border-radius: 10px;
        width: ${props.size}px;
        height: ${props.size}px;
        object-fit: cover;
    `}
`

export const CoverImage = styled.img.attrs((props) => ({
    src: 'https://source.unsplash.com/1600x900/?nature,photography,technology'
}))`
    ${props => css`
        width: 100%;
        height: ${props.size}px;
        object-fit: cover;
    `}
`