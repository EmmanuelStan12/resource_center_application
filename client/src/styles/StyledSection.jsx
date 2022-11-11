import styled from "styled-components";

export const SectionHeader = styled.h2`
    font-size: 2.7rem;
    border-bottom: ${props => '1px solid ' + props.color || 'rgba(255, 255, 255, 0.5)'};
    width: 100%;
    color: ${props => props.color || 'white'};
    margin: ${props => props.margin};
    margin-bottom: 2rem;
    padding: ${props => props.padding};
    display: ${props => props.display || 'inherit'};
    justify-content: space-between;
    align-items: center;
    height: fit-content;
`;

const Section = styled.section`
    width: 100%;
    height: ${props => props.height || 'fit-content'};
    padding: ${props => props.padding || 0};
    margin: ${props => props.margin || 0};
    margin-bottom: 2rem;
`;

export default Section;