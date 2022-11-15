import styled, { css } from "styled-components";

const BaseButton = styled.button`
    ${
        props => css`
        border: none;
        border-radius: 5px;
        padding: ${ props.compact ? '0.4rem 0.8rem' : `0.7rem 1.5rem`};
        font-size: ${props.compact ? '0.9rem' : '1rem'};
        cursor: pointer;
        color: white,
        outline: none;
        display: inline-block;
        font-weight: 600;
        text-transform: uppercase;
        transition: all 300ms ease-in-out; 
        justifySelf: flex-end;       
        `
    }
`;

export const ElevatedButton = styled(BaseButton)`
    ${props => {
        const {
            theme,
            variant = 'primary'
        } = props;
        const bg = theme.main[`${variant}`] || 'transparent';
        return css`
            box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
            background-color: ${bg};
            color: white;
            &:hover {
                box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
            }
        `;
    }}
`;

export const FloatingActionButton = styled(ElevatedButton).attrs(props => {
    const { variant = 'primary', theme, size = 50, color } = props;

    return {
        variant: theme.main[`${variant}`] || variant,
        size: `${size}px`,
        fontSize: `${size * 0.5}px`,
        color: theme.main[`${color}`] || color
    }
})`
    ${({ variant, size, fontSize, color }) => css`
        border-radius: 50%;
        width: ${size};
        height: ${size};
        padding: 0rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${variant};
        svg {
            color: ${color};
            font-size: ${fontSize};
        }
    `}
`;

export const IconButton = styled(ElevatedButton)`
    ${props => css`
        display: flex;
        gap: 7px;
        box-sizing: border-box;
        justify-content: center;
        border-radius: 30px;
        align-items: center;
        text-align: center;
        svg {
            color: white;
            font-size: 1.9rem;
        }
        p {
            vertical-align: center;
            margin-top: 1px;
        }
    `}
`

export const OutlinedButton = styled(BaseButton)`
    ${props => {
        const {
            theme,
            variant = 'primary'
        } = props;
        const bg = theme.main[`${variant}`] || 'transparent';
        const onBg = theme.main[`on${variant.charAt(0).toUpperCase() + variant.slice(1)}`] || 'white';
        return css`
            border: 2px solid ${bg};
            background-color: transparent;
            color: ${bg};
            &:hover {
                box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
                color: ${onBg};
                background-color: ${bg};
            }
        `;
    }}
`;

export const DefaultButton = styled(BaseButton)`
    ${props => {
        const {
            theme,
            variant = 'primary'
        } = props;
        const bg = theme.main[`${variant}`] || 'transparent';
        return css`
            background-color: ${bg};
            color: white;
            &:hover {
                box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
            }
        `;
    }}
`;

export default BaseButton;