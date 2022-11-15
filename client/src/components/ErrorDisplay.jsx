import React, { useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md';
import Box from '../styles/StyledBox';
import { FloatingActionButton } from '../styles/StyledButton';
import Text from '../styles/StyledText';

const ErrorDisplay = ({ error, timeout = 3000 }) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (error) {
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, timeout)
        }
    }, [error])
    

  return (
    <Box width='100%' background='rgb(241, 64, 64)' height='fit-content' padding='10px 0px' className='error_box'>
        <Text variant='p' as='p'>{error || 'No error to show'}</Text>
        <FloatingActionButton size={35} className='floating_button' variant='rgb(241, 64, 64)'>
            <MdCancel />
        </FloatingActionButton>
    </Box>
  )
}

export default ErrorDisplay