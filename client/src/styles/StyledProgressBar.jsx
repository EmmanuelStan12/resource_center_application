import styled, { css } from "styled-components";

const StyledProgressBar = styled.div.attrs(props => {
    const { variant = 'primary', theme, size = 30 } = props;
    return {
        variant: theme.main[`${variant}`],
        size: `${size}px`,
        borderWidth: `${size / 5}px`
    }
})`
    ${props => css`
        display: flex;
        justify-content: center;
        &:after {
            content: '';
            width: ${props.size};
            height: ${props.size};
            border: ${props.borderWidth} solid white;
            border-top-color: ${props.variant};
            border-radius: 50%;
            animation: loading 1s linear infinite;
        }
        @keyframes loading {
            to {
                transform: rotate(1turn);
            }
        }
    `}
`;

export default StyledProgressBar;