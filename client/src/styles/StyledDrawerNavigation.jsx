import styled, { css } from "styled-components";
import Box from "./StyledBox";
import FlexContainer from "./StyledFlexContainer";

export const StyledDrawerNavigation = styled(Box).attrs((props) => {
    return props;
})`
    ${props => css`

    `};
`;

export const StyledDrawer = styled(Box).attrs((props) => props)`
    ${props => css`
        position: fixed;
        width: 300px;
        box-shadow: 0 1px 4px 3px rgba(0, 0, 0, 0.3);
        top: 0;
        left: 0;
        z-index: -99;
        transition: all 300ms ease;
        visibility: none;
        transform: translateX(-350px);
        &.active {
            z-index: 900;
            transform: translateX(0);
        }
    `}
`;

export const StyledDrawerItem = styled(FlexContainer)`
    justify-content: start;
    ${props => css`
        padding: 0.6rem 1rem;
    `}
`

export const Divider = styled.div`
    width: ${props => props.width} || 100%;
    height: 1px;
    background: ${({ theme, background }) => theme.main[`${background}`] || background || '#cfcfcf'};
`

export const DrawerOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: -99;
    opacity: 0;
    transition: all 400ms ease;
    &.active {
        z-index: 800;
        cursor: pointer;
        opacity: 1;
    }
`