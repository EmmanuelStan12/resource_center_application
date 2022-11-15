import React from 'react'
import StyledMultiselect from '../styles/StyledMultiselect'

const Multiselect = ({ options, reference }) => {
  return (
    <StyledMultiselect>
        <select ref={reference}>
            {options.map(({ value, name }) => 
                <option key={value} value={value}>{name}</option>
                )}
        </select>
    </StyledMultiselect>
  )
}

export default Multiselect