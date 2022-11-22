import React, { useState } from 'react'
import Box from '../styles/StyledBox'
import { SectionHeader } from '../styles/StyledSection'
import Text from '../styles/StyledText'
import { MdCancel } from 'react-icons/md'
import { DrawerOverlay } from '../styles/StyledDrawerNavigation'
import { FloatingActionButton } from '../styles/StyledButton'
import FlexContainer from '../styles/StyledFlexContainer'
import Button from './Button'
import TextField, { TextArea } from './TextField'
import { StyledModal } from '../styles/StyledModal'

const Modal = ({
    active,
    setActive,
    onExecute,
    titleRef,
    descriptionRef,
    actionTitle
}) => {

    return (
        <>
            <DrawerOverlay className={active && 'active'} onClick={() => setActive(false)}>
            </DrawerOverlay>
            <StyledModal background='transparent' className={active && 'active'} padding='1rem'>
                <Box padding='0.9rem' borderRadius='10px' background='white'>
                    <SectionHeader display='flex' color='rgba(0,0,0,0.8)'>
                        {actionTitle}
                        <FloatingActionButton onClick={() => setActive(!active)} size={40}>
                            <MdCancel />
                        </FloatingActionButton>
                    </SectionHeader>
                    <TextField
                        variant={'outlined'}
                        reference={titleRef}
                        type='text'
                        placeholder={'Title'}
                    />
                    <Box height='10px' />
                    <TextArea
                        variant={'outlined'}
                        reference={descriptionRef}
                        type='text'
                        placeholder={'Description'}
                        rows='9'
                    />
                    <FlexContainer background='transparent' height='fit-content' justifyContent='space-between' alignItems='center'>
                        <Button variant={'outlined'} onClick={() => setActive(false)}>
                            Cancel
                        </Button>
                        <Button variant='elevated' onClick={() => onExecute()}>
                            Done
                        </Button>
                    </FlexContainer>
                    </Box>
                </StyledModal>
            
        </>
    )
}

export const InboxModal = ({
    active,
    setActive,
    onExecute,
    titleRef,
    usernameRef,
    descriptionRef,
    actionTitle
}) => {

    return (
        <>
            <DrawerOverlay className={active && 'active'} onClick={() => setActive(false)}>
            </DrawerOverlay>
            <StyledModal background='transparent' className={active && 'active'} padding='1rem'>
                <Box padding='0.9rem' borderRadius='10px' background='white'>
                    <SectionHeader display='flex' color='rgba(0,0,0,0.8)'>
                        {actionTitle}
                        <FloatingActionButton onClick={() => setActive(!active)} size={40}>
                            <MdCancel />
                        </FloatingActionButton>
                    </SectionHeader>
                    <TextField
                        variant={'outlined'}
                        reference={usernameRef}
                        type='text'
                        placeholder={"Receiver's Intern id"}
                    />
                    <Box height='10px' />
                    <TextField
                        variant={'outlined'}
                        reference={titleRef}
                        type='text'
                        placeholder={'Title'}
                    />
                    <Box height='10px' />
                    <TextArea
                        variant={'outlined'}
                        reference={descriptionRef}
                        type='text'
                        placeholder={'Description'}
                        rows='9'
                    />
                    <FlexContainer background='transparent' height='fit-content' justifyContent='space-between' alignItems='center'>
                        <Button variant={'outlined'} onClick={() => setActive(false)}>
                            Cancel
                        </Button>
                        <Button variant='elevated' onClick={() => onExecute()}>
                            Done
                        </Button>
                    </FlexContainer>
                    </Box>
                </StyledModal>
            
        </>
    )
}

export default Modal