import React from 'react'
import StyledMultiselect from '../styles/StyledMultiselect'

const Multiselect = ({ options }) => {
  return (
    <StyledMultiselect>
        <select >
            {options.map(({ value, name }) => 
                <option value={value}>{name}</option>
                )}
        </select>
    </StyledMultiselect>
  )
}

export default Multiselect