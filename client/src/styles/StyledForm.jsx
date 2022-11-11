import styled, { css } from "styled-components";

const StyledForm = styled.form.attrs(props => {
    const {
        width = '100%', 
        height = '100%', 
        borderRadius = '10px',
        theme,
        border = 0,
        background,
    } = props;
    return ({
        width,
        height,
        borderRadius,
        background: background || theme.main.background,
        border,
    })
})`
    ${props => css`
        width: ${props.width};
        height: ${props.height};
        border-radius: ${props.borderRadius};
        background: ${props.background};
        border: ${props.border};
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: flex-start;
        gap: 7px;
        min-width: 300px;
        box-shadow: 0 0 5px 3px rgba(0,0,0,0.4);
        padding: 0px 15px;
    `}
`;

export default StyledForm;