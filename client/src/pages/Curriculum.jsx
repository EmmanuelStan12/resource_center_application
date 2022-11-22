import React, { useEffect, useState } from 'react'
import CurriculumItem from '../components/CurriculumItem'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import CurriculumContent from '../components/CurriculumContent'
import Text from '../styles/StyledText'
import { Divider } from '../styles/StyledDrawerNavigation'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurriculum } from '../logic/actions/CurriculumActions';
import ErrorDisplay from '../components/ErrorDisplay'
import LoadingPage from '../components/LoadingPage'

const Curriculum = () => {

  const userState = useSelector(state => state.userReducer)
  const userData = userState.data
  const curriculumState = useSelector(state => state.curriculumReducer)
  const dispatch = useDispatch()
  const [currentTab, setCurrentTab] = useState(1)
  const [show, setShow] = useState(false)

  useEffect(() => {
    
    if (userData && userData.token && curriculumState.data === null && curriculumState.error === null) {
      console.log(userData, curriculumState)
      dispatch(fetchCurriculum(userData.user.track, userData.token.token))
    }
  }, [userState])

  return (
    <Box margin='10px 0 0 0'>
        {curriculumState.loading && <LoadingPage />}
        <ErrorDisplay show={show} setShow={setShow} error={curriculumState.error} />
        <Text style={{ paddingLeft: '10px' }} as='h4' variant='h4' color='#121212'>Curriculum</Text>
        <Divider></Divider>
        <FlexContainer>
            <Box className='scrollbar' style={{ borderRight: '1px solid #e2e2e2' }} width={'30%'}>
                {
                curriculumState.data && curriculumState.data.map((data) => <CurriculumItem setActive={setCurrentTab} active={currentTab === data.week} key={data.id} item={data} />)
                }
            </Box>
            {curriculumState.data && <CurriculumContent item={curriculumState.data.find((value) => value.week === currentTab)} />}
        </FlexContainer>
    </Box>
  )
}

export default Curriculum