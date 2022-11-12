import React from 'react';
import StyledForm from '../styles/StyledForm';

const Form = (props) => {
    const { children, ...otherProps } = props;
    return (
        <StyledForm {...otherProps}>
            {children}
        </StyledForm>
    )
}

export default Form;