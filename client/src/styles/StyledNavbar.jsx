import styled, {css} from "styled-components";

const StyledNavbar = styled.nav`
    height: 70px;
    padding: 0rem 2rem;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    z-index: 100;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.5);
    ${props => css`
        justify-content: ${props.justifyContent || 'space-between'};
        background: rgb(252, 252, 252);
    `}
`;

export const NavbarTitle = styled.h3`
    ${props => css`
        color: ${props.theme.main.primary || 'white'};
        font-size: 1.25rem;
        span {
            color: ${props.spanColor || props.theme.main.primary}
        }
    `}
`;

export const NavbarOptions = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const NavbarOption = styled.li`
    list-style: none;
    overflow: hidden;
    a {
        text-decoration: none;
        font-size: 1.1rem;
        color: ${props => props.theme.main.primary};
        font-style: bold;
    }
    div {
        height: 2px;
        border-radius: 1px;
        background: ${props => props.theme.main.primary};
        transform: translateX(-110%);
        transition: all 500ms ease;
    }
    &&:hover div {
        transform: translateX(0%);
    }
    div.active {
        transform: translateX(0%);
    }
`;

export default StyledNavbar;