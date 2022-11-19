import styled, { css } from "styled-components";

export const StyledTab = styled.button`
    ${props => {
        const {
            theme,
            variant = 'primary'
        } = props;
        const bg = theme.main[`${variant}`] || 'transparent';
        const onBg = theme.main[`on${variant.charAt(0).toUpperCase() + variant.slice(1)}`] || 'white';
        return css`
            border: none;
            outline: none;
            background-color: transparent;
            padding: 10px;
            color: #121212;
            cursor: pointer;
            transition: all 200ms ease;
            &.active {
                color: ${bg};
                border-bottom: 2px solid ${bg};
            }
        `;
    }}
`;