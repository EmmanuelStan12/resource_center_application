import styled, { css } from "styled-components";

const StyledForm = styled.form.attrs(props => {
    const {
        width = '100%', 
        height = '100%', 
        borderRadius = '10px',
        theme,
        border = 0,
        background = 'white',
        justifyContent = 'flex-start',
        alignItems = 'flex-start'
    } = props;
    return ({
        width,
        height,
        borderRadius,
        background: background,
        border,
        justifyContent,
        alignItems,
    })
})`
    ${props => css`
        width: ${props.width};
        height: ${props.height};
        background: ${props.background};
        border: ${props.border};
        display: flex;
        flex-direction: column;
        justify-content: ${props.justifyContent};
        align-items: ${props.alignItems};
        gap: 7px;
        min-width: 300px;
        
        padding: 0px 15px;
    `}
`;

export default StyledForm;