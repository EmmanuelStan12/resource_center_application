import styled, { css } from "styled-components";

const StyledSwitch = styled.input.attrs(({ variant, theme }) => ({
    type: 'checkbox',
    variant: theme.main[`${variant}`] || theme.main.primary,
}))`
    ${({ variant }) => css`
        width: 45px;
        height: 20px;
        appearance: none;
        background: #e2e2e2;
        border-radius: 10px;
        position: relative;
        transition: all 200ms ease;
        cursor: pointer;
        &:before {
            content: "";
            position: absolute;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: white;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            transition: all 200ms ease;
            box-shadow: 0px 0px 2px 3px rgba(226, 226, 226, 0.7);
        }
        &:checked {
            background: ${variant};
            &:before {
                transform: translate(100%, -50%);
            }
        }
        &:hover {
            &:before {
                box-shadow: 0px 0px 1px 6px rgba(255, 255, 255, 0.2);
            }
        }
    `}
`;

export default StyledSwitch;