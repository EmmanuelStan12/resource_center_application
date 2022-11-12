import React from 'react'
import Form from '../components/Form'
import Box from '../styles/StyledBox'
import FlexContainer from '../styles/StyledFlexContainer'
import { SectionHeader } from '../styles/StyledSection';
import TextField from '../components/TextField';
import { MdEmail, MdPassword } from 'react-icons/md'
import Label from '../styles/StyledLabel'
import Button from '../components/Button';
import Switch from '../components/Switch';
import Text from '../styles/StyledText';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <FlexContainer height='100%' background='primary'>
        <Box height='100%' background='rgb(252, 252, 252)' style={{ maxWidth: '900px' }}>
            <Form>
                <SectionHeader color='#121212'>Login</SectionHeader>
                <FlexContainer gap='7px' height='fit-content' alignItems='start' flexDirection='column'>
                    <Label width='80%'>
                        Email
                        <TextField icon={MdEmail} variant='outlined' type='email' />
                    </Label>
                    <Label width='80%'>
                        Password
                        <TextField icon={MdPassword} variant='outlined' type='email' />
                    </Label>
                    <FlexContainer height='fit-content' width='80%' alignItems='center' justifyContent='space-between'>
                        <Text variant='caption' color='#121212' as='p'>Don't have an account? <Link to='/register'>Register</Link></Text>
                        <Switch label='Remember me' />
                    </FlexContainer>
                    <Button variant='elevated'>Login</Button>
                </FlexContainer>
            </Form>
        </Box>
    </FlexContainer>
  )
}

export default Login