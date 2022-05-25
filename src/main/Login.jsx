import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const Login = () => {
  const { control, handleSubmit } = useForm()

  const attemptSubmit = handleSubmit(values => {
    console.log('values', values)
  })

  return (
    <Container minWidth='xs' sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box />
      <Stack spacing={2}>
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
        <Button onClick={attemptSubmit} size='large'>
          Submit
        </Button>
      </Stack>
      <Box />
    </Container>
  )
}

export default Login
