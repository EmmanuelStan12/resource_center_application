import styled, { css } from "styled-components";

const Box = styled.div.attrs(props => {
    const {
        width = '100%', 
        height = '100%', 
        borderRadius = 0,
        theme,
        background,
        border = 0,
        position = 'relative',
        style
    } = props;
    return ({
        width,
        height,
        borderRadius,
        background: background || theme.main.background,
        border,
        position,
        style
    })
})`
    ${props => css`
        width: ${props.width};
        height: ${props.height};
        border-radius: ${props.borderRadius};
        background: ${props.background};
        border: ${props.border};
        ${props.style ? {...props.style} : ''}
    `}
`;

export default Box;