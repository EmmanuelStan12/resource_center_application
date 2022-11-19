import React, { useState } from 'react'
import Box from '../styles/StyledBox'
import Text from '../styles/StyledText'
import SectionHeader from '../styles/StyledSection'
import { Divider } from '../styles/StyledDrawerNavigation'
import FlexContainer from '../styles/StyledFlexContainer'
import { StyledTab } from '../styles/StyledTab'
import { FloatingActionButton } from '../styles/StyledButton'
import { MdAdd } from 'react-icons/md'
import Modal from '../components/Modal'
import TextField, { TextArea } from '../components/TextField'
import InboxItem from '../components/InboxItem'

const types = {
  'read': {
    actionType: (text) => text,
    title: (text) => <Text variant='body1' color='#121212' as='h6'>{text}</Text>,
    description: (text) => <Text variant='p' color='#121212' as='p'>{text}</Text>
  },
  'write': {
    actionType: (text) => text,
    title: (ref) => <TextField 
      variant={'outlined'}
      reference={ref}
      type='text'
    />,
    description: (ref) => <TextArea 
      variant={'outlined'}
      reference={ref}
      type='text'
    />
  }
}

const Inbox = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <Box height='fit-content' margin='10px 0 0 0' padding='20px'>
      <Modal 
      active={openModal} 
      setActive={setOpenModal}
      title={types['read'].title('Hello from Emmanuel')} 
      description={types.read.description('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum in, atque itaque fugit assumenda ullam commodi placeat molestiae sunt dolorem ea alias est magni asperiores dicta deleniti sequi minima aspernatur!')} 
      action='Done'
      actionTitle={types['read'].actionType('Read Mail')}
      />
      <FlexContainer justifyContent='space-between' gap='9px'>
        <Text as='h4' variant='h4' color='#121212'>Inbox</Text>
        <FloatingActionButton onClick={() => setOpenModal(true)}>
          <MdAdd />
        </FloatingActionButton>
      </FlexContainer>
      <Divider></Divider>
      <Box className='scrollbar'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
          <InboxItem />
        ))}
      </Box>
      </Box>
  )
}

export default Inbox