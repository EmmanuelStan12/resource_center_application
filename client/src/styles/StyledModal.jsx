import styled, { css } from "styled-components";
import Box from "./StyledBox";

export const StyledModal = styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -400;
    transition: all 300ms ease;
    padding: 3rem;
    &.active {
        z-index: 1000;
    }
`