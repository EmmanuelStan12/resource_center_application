import React from 'react'
import BaseButton, { ElevatedButton, FloatingActionButton, IconButton, OutlinedButton } from '../styles/StyledButton'
import FlexBox from '../styles/StyledFlexContainer'

const types = {
  'outlined': OutlinedButton,
  'elevated': ElevatedButton,
  'default': BaseButton,
  'floating': FloatingActionButton,
  'icon': IconButton
}

const Button = ({ variant, disabled = false, icon, ...otherProps }) => {

  const Component = types[`${variant}`]
  const Icon = icon;
  return (
    <FlexBox margin='0' width='inline-block' height='fit-content' background='transparent' padding='9px 10px' gap={icon ? '5px' : '0px'}>
      {icon && <Icon />}
      <Component disabled={disabled} {...otherProps} ></Component>
    </FlexBox>
  )
}

export const LoadingButton = ({ variant, disabled = false, icon, ...otherProps }) => {

  const Component = types[`${variant}`]
  const Icon = icon;
  return (
    <FlexBox margin='0' width='inline-block' height='fit-content' background='transparent' padding='9px 10px' gap={icon ? '5px' : '0px'}>
      {disabled && <Icon />}
      <Component disabled={disabled} {...otherProps} ></Component>
    </FlexBox>
  )
}

export default Button