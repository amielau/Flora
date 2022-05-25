import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const Login = () => {
  const { control, handleSubmit } = useForm()

  const attemptSubmit = handleSubmit(values => {
    console.log('values', values)
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
      </Stack>
      <Box flex='2 2 auto' />
    </Container>
  )
}

export default Login
