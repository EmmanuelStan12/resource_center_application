import React, { useRef, useState } from 'react'
import Form from '../components/Form'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import { SectionHeader } from '../styles/StyledSection';
import TextField from '../components/TextField';
import { MdEmail, MdPassword } from 'react-icons/md'
import Label from '../styles/StyledLabel'
import Button, { LoadingButton } from '../components/Button';
import Switch from '../components/Switch';
import Text from '../styles/StyledText';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { loginUser } from '../logic/actions/UserActions';
import StyledProgressBar from '../styles/StyledProgressBar'
import useLocalStorage from '../hooks/useLocalStorage';

const types = {
    'text': 'password',
    'password': 'text'
}

const iconTypes = {
    'text': AiOutlineEyeInvisible,
    'password': AiOutlineEye
}

const Login = () => {

    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const emailRef = useRef()
    const passwordRef = useRef()
    const switchRef = useRef();
    const [type, setType] = useState('password');

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(emailRef.current.value, passwordRef.current.value))
    }

  return (
    <FlexContainer  background='primary'>
        <Box height='100%' background='rgb(252, 252, 252)' style={{ maxWidth: '900px' }}>
            <Form onSubmit={handleSubmit}>
                <SectionHeader color='#121212'>Login</SectionHeader>
                <FlexContainer gap='7px' height='fit-content' alignItems='start' flexDirection='column'>
                    <Label width='80%'>
                        Email
                        <TextField reference={emailRef} icon={MdEmail} variant='outlined' type='email' />
                    </Label>
                    <Label width='80%'>
                        Password
                        <TextField reference={passwordRef} icon={MdPassword} 
                        variant='outlined' 
                        type={type}
                        onEndIconClick={() => setType(types[type])}
                        endIcon={iconTypes[type]}
                        />
                    </Label>
                    <FlexContainer height='fit-content' width='80%' alignItems='center' justifyContent='space-between'>
                        <Text variant='caption' color='#121212' as='p'>Don't have an account? <Link to='/register'>Register</Link></Text>
                        <Switch reference={switchRef} variant='caption' label='Remember me' />
                    </FlexContainer>
                    <LoadingButton
                    disabled={userState.loading}
                    icon={StyledProgressBar}
                    type='submit' onClick={handleSubmit} variant='elevated'>Login</LoadingButton>
                </FlexContainer>
            </Form>
        </Box>
    </FlexContainer>
  )
}

export default Login