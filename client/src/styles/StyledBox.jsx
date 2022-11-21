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
        style,
        margin = '0px'
    } = props;
    const bg = theme.main[`${background}`] || background;
    console.log(bg)
    return ({
        width,
        height,
        borderRadius,
        background: bg,
        border,
        position,
        padding,
        margin,
        style
    })
})`
    ${props => css`
        width: ${props.width};
        height: ${props.height};
        border-radius: ${props.borderRadius};
        background: ${props.background};
        border: ${props.border};
        padding: ${props.padding};
        margin: ${props.margin};
        ${props.style ? { ...props.style } : ''};
        &.scrollbar {
            overflow-y: auto;
            &::-webkit-scrollbar {
                width: 10px;
                background: transparent;
            }
            
            /* Track */
            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
                border-radius: 10px;
            }
            
                /* Handle */
            &::-webkit-scrollbar-thumb {
                background: ${props.theme.main.primary};
                border-radius: 10px;
            }
        }
    `}
`;

export default Box;