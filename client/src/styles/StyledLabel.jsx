import styled, { css } from "styled-components";

const Label = styled.label.attrs((props) => {
    const { width = 'calc(50% - 7px)' } = props;

    return {
        width
    }
})`
    ${({ width }) => css`
        vertical-align: center;
        color: black;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: ${width};
        height: fit-content;
        gap: 4px;
    `}
`;

export default Label;