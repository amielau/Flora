import { Box, Button, FormControlLabel, Stack, Switch, TextField, Typography } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

const AddPlant = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: { type: '', nickname: '', careInst: '', waterDaily: false },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'careAlerts',
  })

  const attemptSubmit = handleSubmit(values => {
    console.log('values', values)
  })

  return (
    <Stack spacing={3}>
      <Controller
        name='type'
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField label='Plant Type' {...field} />}
      />
      <Controller
        name='nickname'
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField label='Nickname' {...field} />}
      />
      <Controller
        name='careInst'
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField label='Care Instructions' {...field} />}
      />
      <Controller
        name='waterDaily'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <FormControlLabel
            control={<Switch checked={field.value ?? false} onChange={e => field.onChange(e.target.checked)} />}
            label='Water Daily?'
          />
        )}
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py: 2 }}>
        <Typography variant='h6'>Care Alerts</Typography>
        <Button onClick={() => append({ alertMessage: '', date: '' })} size='large' variant='outlined'>
          Add Alert
        </Button>
      </Box>
      <Stack spacing={3}>
        {fields.map((field, index) => {
          return (
            <Box
              key={`careAlerts.${index}.alertMessage`}
              sx={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}
            >
              <Stack sx={{ display: 'flex', flex: '1', flexDirection: 'column', mr: 2 }} spacing={2}>
                <Controller
                  control={control}
                  name={`careAlerts.${index}.alertMessage`}
                  render={({ field }) => {
                    return <TextField label='Alert Message' {...field} size='small' />
                  }}
                />
                <Controller
                  control={control}
                  name={`careAlerts.${index}.date`}
                  render={({ field }) => (
                    <DateTimePicker
                      {...field}
                      value={field.value ?? ''}
                      onChange={v => {
                        field.onChange(v.toISO())
                      }}
                      renderInput={params => <TextField {...params} size='small' label='Date' />}
                    />
                  )}
                />
              </Stack>
              <Button onClick={() => remove(index)} variant='outlined' size='large'>
                Remove
              </Button>
            </Box>
          )
        })}
      </Stack>
      <Button variant='contained' onClick={attemptSubmit} sx={{ mt: 2 }}>
        Submit
      </Button>
    </Stack>
  )
}

export default AddPlant
