import React from 'react'
import { FloatingActionButton } from '../styles/StyledButton';
import { DefaultTextField, OutlinedTextField } from '../styles/StyledTextField'

const types = {
    'outlined': OutlinedTextField,
    'default': DefaultTextField
}

const TextField = ({ icon, variant, reference, endIcon = null, onEndIconClick, ...otherProps }) => {
  const Icon = icon;
  const Component = types[`${variant}`];
  const EndIcon = endIcon;
  return (
    <Component>
      {icon && <Icon color='rgba(0,0,0,0.7)' />}
      <input ref={reference} {...otherProps} />
      {endIcon && <EndIcon onClick={onEndIconClick} size={20} className="end_icon" />}
    </Component>
  )
}

export default TextField