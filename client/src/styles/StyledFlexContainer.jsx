import styled, { css } from "styled-components";
import Box from './StyledBox'

const FlexContainer = styled(Box).attrs(props => ({
    width: props.width || '100%',
    alignItems: props.alignItems || 'center',
    justifyContent: props.justifyContent || 'center',
    flexDirection: props.flexDirection || 'row',
    height: props.height || 'fit-content',
    gap: props.gap || 0,
    margin: props.margin || 0,
    padding: props.padding || 0
}))`
    ${props => css`
        width: ${props.width};
        display: flex;
        align-items: ${props.alignItems};
        justify-content: ${props.justifyContent};
        box-sizing: border-box;
        flex-direction: ${props.flexDirection};
        height: ${props.height};
        margin: ${props.margin};
        padding: ${props.padding};
        gap: ${props.gap};
        flex-wrap: wrap;
    `
}
`;

export default FlexContainer;