import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useCreateAccount } from '../hooks/useCreateAccount'

const Register = () => {
  const navigate = useNavigate()
  const { submit } = useCreateAccount()

  const { control, handleSubmit } = useForm({
    defaultValues: { username: '', password: '', fullName: '', email: '' },
  })

  const attemptSubmit = handleSubmit(async values => {
    await submit(values, () => {
      console.log('callback')
    })
  })

  return (
    <Container maxWidth='xs' sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box flex='1 1 auto' />
      <Stack spacing={2} flex='2 2 auto'>
        <Typography variant='h3'>Create Account</Typography>
        <Controller
          name='username'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField label='Username' {...field} />}
        />
        <Controller
          name='password'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField type='password' label='Password' {...field} />}
        />
        <Controller
          name='fullName'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField label='Full Name' {...field} />}
        />
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField type='email' label='Email' {...field} />}
        />
        <Button onClick={attemptSubmit} size='large' variant='contained'>
          Submit
        </Button>
        <Button onClick={() => navigate('/login')} variant='flat' size='large'>
          I Already Have an Account
        </Button>
      </Stack>
    </Container>
  )
}

export default Register
