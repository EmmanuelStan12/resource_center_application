import styled, { css } from "styled-components";

const Box = styled.div.attrs(props => {
    const {
        width = '100%', 
        height = '100%', 
        borderRadius = 0,
        theme,
        background = 'white',
        border = 0,
        position = 'relative',
        padding = '0px',
        style
    } = props;
    const bg = theme.main[background] ? theme.main[background] : background;
    return ({
        width,
        height,
        borderRadius,
        background: bg,
        border,
        position,
        padding,
        style
    })
})`
    ${props => css`
        width: ${props.width};
        height: ${props.height};
        border-radius: ${props.borderRadius};
        background: ${props.background};
        border: ${props.border};
        padding: ${props.padding}
        ${props.style ? {...props.style} : ''}
    `}
`;

export default Box;