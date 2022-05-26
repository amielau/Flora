import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useAuthenticate } from '../hooks/useAuthenticate'

const Login = () => {
  const navigate = useNavigate()
  const { login, token } = useAuthenticate()

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  const { control, handleSubmit } = useForm({ defaultValues: { username: '', password: '' } })

  const attemptSubmit = handleSubmit(async values => {
    await login(values, () => navigate('/'))
  })

  return (
    <Container maxWidth='xs' sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box flex='1 1 auto' />
      <Stack spacing={2} flex='2 2 auto'>
        <Typography variant='h3'>Login</Typography>
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
        <Button onClick={attemptSubmit} size='large' variant='contained'>
          Submit
        </Button>
        <Button onClick={() => navigate('/register')} variant='flat' size='large'>
          Create Account
        </Button>
      </Stack>
      <Box flex='2 2 auto' />
    </Container>
  )
}

export default Login
