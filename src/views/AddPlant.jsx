import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Button, Container, Stack, TextField, Switch } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

const AddPlant = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: { type: 'Plant type', nickname: 'Nickname', careInst: 'Care Instructions' },
  })
  const attemptSubmit = handleSubmit(values => {
    console.log('values', values)
  })

  return (
    <Container>
      <Box />
      <Stack spacing={2}>
        <Controller
          name=''
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField label='Plant Type' {...field} />}
        />
        <Controller
          name=''
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField label='Nickname' {...field} />}
        />
        <Controller
          name=''
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField label='Care Instructions' {...field} />}
        />
        <Controller
          name='watering toggle'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Switch label='Water Daily?' {...field} />}
        />
      </Stack>
      <Button variant='contained' onClick={attemptSubmit}>
        {' '}
        Submit
      </Button>
    </Container>
  )
}

export default AddPlant
