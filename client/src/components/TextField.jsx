import React from 'react'
import { DefaultTextField, OutlinedTextField } from '../styles/StyledTextField'

const types = {
    'outlined': OutlinedTextField,
    'default': DefaultTextField
}

const TextField = ({ icon, variant, ...otherProps }) => {
  const Icon = icon;
  const Component = types[`${variant}`];
  return (
    <Component>
      {icon && <Icon color='rgba(0,0,0,0.7)' />}
      <input {...otherProps} />
    </Component>
  )
}

export default TextField