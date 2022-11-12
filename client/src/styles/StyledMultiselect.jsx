import styled, { css } from "styled-components";

const StyledMultiselect = styled.div.attrs(props => ({
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
        border: 1px solid rgba(0, 0, 0, 0.8);
        background: transparent;
        & > select {
            outline: none;
            border: 0;
            font-size: 14px;
            font-family: "Poppins";
            width: 100%;
            display: flex;
            flex: 1;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        }
    `}
`;

export default StyledMultiselect