import React, { useState } from 'react'
import Box from '../styles/StyledBox'
import { SectionHeader } from '../styles/StyledSection'
import Text from '../styles/StyledText'
import { MdCancel } from 'react-icons/md'
import { DrawerOverlay } from '../styles/StyledDrawerNavigation'
import { FloatingActionButton } from '../styles/StyledButton'
import FlexContainer from '../styles/StyledFlexContainer'
import Button from './Button'

const Modal = ({ 
    active, 
    setActive,
    action,
    onExecute,
    title,
    description,
    actionTitle
}) => {

  return (
    <>
        <DrawerOverlay className={active && 'active'} style={{ padding: '2rem' }} onClick={() => setActive(false)}>
            <Box borderRadius='10px' background='white' style={{ padding: '1rem' }}>
            <SectionHeader display='flex' color='rgba(0,0,0,0.8)'>
                        {actionTitle}
                        <FloatingActionButton onClick={() => setActive(!active)} size={40}>
                            <MdCancel />
                        </FloatingActionButton>
                    </SectionHeader>
                    {title}
                    {description}
                    <FlexContainer background='transparent' height='fit-content' justifyContent='space-between' alignItems='center'>
                        <Button variant={'outlined'}>
                            {action}
                        </Button>
                        <Button variant='elevated' onClick={() => setActive(false)}>
                            Cancel
                        </Button>
                    </FlexContainer>
            </Box>
        </DrawerOverlay>
    </>
  )
}

export default Modal