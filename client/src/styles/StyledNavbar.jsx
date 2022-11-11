import styled, {css} from "styled-components";

const StyledNavbar = styled.nav`
    padding: 1rem 2rem;
    box-shadow: inset 1px 3px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    ${props => css`
        justify-content: ${props.justifyContent || 'space-between'};
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    `}
`;

export const NavbarTitle = styled.h3`
    ${props => css`
        color: ${props.color || 'white'};
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
        font-size: 1.07rem;
        color: white;
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
`;

export default StyledNavbar;