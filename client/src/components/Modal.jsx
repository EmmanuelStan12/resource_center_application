import React, { useState } from 'react'
import Box from '../styles/Box'
import FlexBox from '../styles/FlexBox'
import { SectionHeader } from '../styles/Section'
import Text from '../styles/Text'
import { MdCancel } from 'react-icons/md'
import topics from '../data/content'

const Modal = ({active, setActive}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onPrevClicked = () => {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const onNextClicked = () => {
        if (currentIndex == topics.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

  return (
    <>
        <Box className={`modal-overlay ${active ? 'active' : ''}`} style={{ 
            background: 'rgba(0,0,0,0.2)', position: 'fixed', top: 0, left: 0, padding: '1.4rem'
            }}>
            <Box className={`modal ${active ? 'active' : ''}`} borderRadius='10px' background='white' style={{ padding: '1rem' }}>
            <SectionHeader display='flex' color='rgba(0,0,0,0.8)'>
                        {topics[currentIndex].topic}
                        <FloatingActionButton onClick={() => setActive(!active)} size={40}>
                            <MdCancel />
                        </FloatingActionButton>
                    </SectionHeader>
                    <Text as='p' color='black' variant='body1'>
                    {topics[currentIndex].description}
                    </Text>
                    <FlexBox width='90%' className='box' background='transparent' height='fit-content' justifyContent='space-between' alignItems='center'>
                        <OutlinedButton onClick={onPrevClicked}>
                            Previous
                        </OutlinedButton>
                        <ElevatedButton onClick={onNextClicked}>
                            Next
                        </ElevatedButton>
                    </FlexBox>
            </Box>
        </Box>
    </>
  )
}

export default Modal