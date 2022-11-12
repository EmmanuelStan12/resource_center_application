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
import StyledMultiselect from '../styles/StyledMultiselect';
import Multiselect from '../components/Multiselect';

const Register = () => {
  return (
    <FlexContainer height='100%' background='primary'>
        <Box height='100%' background='rgb(252, 252, 252)' style={{ maxWidth: '900px' }}>
            <Form>
                <SectionHeader color='#121212'>Register</SectionHeader>
                <FlexContainer gap='7px' height='fit-content' justifyContent='start' alignItems='start' flexDirection='row'>
                    <Label>
                        Firstname
                        <TextField icon={MdEmail} variant='outlined' type='email' />
                    </Label>
                    <Label>
                        Lastname
                        <TextField icon={MdPassword} variant='outlined' type='email' />
                    </Label>
                    <Label>
                        Username
                        <TextField icon={MdEmail} variant='outlined' type='email' />
                    </Label>
                    <Label>
                        Email
                        <TextField icon={MdPassword} variant='outlined' type='email' />
                    </Label>
                    <Label>
                        Password
                        <TextField icon={MdEmail} variant='outlined' type='email' />
                    </Label>
                    <Label>
                        Retype password
                        <TextField icon={MdPassword} variant='outlined' type='email' />
                    </Label>
                    <Label>
                      Select Track
                      <Multiselect options={[
                        {value: 'frontend', name: 'Front-end Engineering'},
                        {value: 'backend', name: 'Back-end Engineering'},
                        {value: 'creative', name: 'Creative Designer'},
                        {value: 'ui@ux', name: 'UI/UX Designer'},
                        {value: 'android', name: 'Android Engineering'}
                      ]} />
                    </Label>
                    <FlexContainer height='fit-content' alignItems='center' justifyContent='space-between'>
                        <Text variant='caption' color='#121212' as='p'>Already a member? <Link to='/login'>Login</Link></Text>
                        <Switch label='Remember me' />
                    </FlexContainer>
                    <Button variant='elevated'>Register</Button>
                </FlexContainer>
            </Form>
        </Box>
    </FlexContainer>
  )
}

export default Register