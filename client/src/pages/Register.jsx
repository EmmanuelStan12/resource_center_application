import React, { useState, useEffect, useRef } from 'react'
import Form from '../components/Form'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import { SectionHeader } from '../styles/StyledSection';
import TextField from '../components/TextField';
import { MdEmail, MdPassword, MdPerson } from 'react-icons/md'
import Label from '../styles/StyledLabel'
import Button, { LoadingButton } from '../components/Button';
import Switch from '../components/Switch';
import Text from '../styles/StyledText';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Multiselect from '../components/Multiselect';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import StyledProgressBar from '../styles/StyledProgressBar';
import { registerUser } from '../logic/actions/UserActions'

const types = {
    'text': 'password',
    'password': 'text'
}

const iconTypes = {
    'text': AiOutlineEyeInvisible,
    'password': AiOutlineEye
}

const Register = () => {

    const [type, setType] = useState('password');
    const passwordRef = useRef()
    const emailRef = useRef()
    const lastnameRef = useRef()
    const firstnameRef = useRef()
    const usernameRef = useRef()
    const trackRef = useRef()
    const dispatch = useDispatch()
    const userState = useSelector(state => state.userReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        const username = usernameRef.current.value;
        const lastname = lastnameRef.current.value;
        const firstname = firstnameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const track = trackRef.current.value;
        const data = { username, password, lastname, firstname, email, track };
        dispatch(registerUser(data))
    }

  return (
    <FlexContainer height='100%' background='primary'>
        <Box height='100%' background='rgb(252, 252, 252)' style={{ maxWidth: '900px' }}>
            <Form>
                <SectionHeader color='#121212'>Register</SectionHeader>
                <FlexContainer gap='7px' height='fit-content' justifyContent='start' alignItems='start' flexDirection='row'>
                    <Label>
                        Firstname
                        <TextField reference={firstnameRef} icon={MdPerson} variant='outlined' type='text' />
                    </Label>
                    <Label>
                        Lastname
                        <TextField reference={lastnameRef} icon={MdPerson} variant='outlined' type='text' />
                    </Label>
                    <Label>
                        Username
                        <TextField reference={usernameRef} icon={MdPerson} variant='outlined' type='text' />
                    </Label>
                    <Label>
                        Email
                        <TextField reference={emailRef} icon={MdEmail} variant='outlined' type='email' />
                    </Label>
                    <Label>
                        Password
                        <TextField reference={passwordRef} icon={MdPassword} 
                        variant='outlined' 
                        type={type}
                        onEndIconClick={() => setType(types[type])}
                        endIcon={iconTypes[type]}
                        />
                    </Label>
                    <Label>
                      Select Track
                      <Multiselect options={[
                        {value: 'frontend', name: 'Front-end Engineering'},
                        {value: 'backend', name: 'Back-end Engineering'},
                        {value: 'creative', name: 'Creative Designer'},
                        {value: 'ui/ux', name: 'UI/UX Designer'},
                        {value: 'android', name: 'Android Engineering'}
                      ]} reference={trackRef} />
                    </Label>
                    <FlexContainer height='fit-content' alignItems='center' justifyContent='space-between'>
                        <Text variant='caption' color='#121212' as='p'>Already a member? <Link to='/login'>Login</Link></Text>
                        <Switch label='Remember me' />
                    </FlexContainer>
                    <LoadingButton
                    disabled={userState.loading}
                    icon={StyledProgressBar}
                    type='submit' onClick={handleSubmit} variant='elevated'>Register</LoadingButton>
                </FlexContainer>
            </Form>
        </Box>
    </FlexContainer>
  )
}

export default Register