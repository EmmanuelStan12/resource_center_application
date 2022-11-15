import styled, { css } from "styled-components";

const Text = styled.h1.attrs(props => {
    const {
        theme,
        variant,
        letterSpacing = 'inherit',
        lineHeight = 'inherit',
        color = 'white',
        size,
    } = props;
    const fontSize = size || theme.textVariants[`${variant}`];
    const c = theme.main[`${color}`] || color;
    return {
        size: fontSize,
        spacing: letterSpacing,
        line: lineHeight,
        fontColor: c
    };
})`
    ${({ theme, size, spacing, line, fontColor }) => css`
        font-size: ${size};
        letter-spacing: ${spacing};
        line-height: ${line};
        color: ${fontColor};
        a {
            color: ${theme.main.primary}
        };
        span {
            color: ${theme.main.primary};
        }
    `}
`;

export default Text;