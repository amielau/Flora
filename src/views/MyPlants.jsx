import { Box, LinearProgress, Stack } from '@mui/material'
import React from 'react'
import { usePlants } from './plants/hooks/usePlants'
import PlantCard from './plants/PlantCard'

const MyPlants = () => {
  const { data, isActive } = usePlants()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', height: '100%', alignItems: 'center' }}>
      {isActive ? (
        <LinearProgress color='primary' variant='indeterminate' sx={{ height: '4px' }} />
      ) : (
        <Box sx={{ height: '4px' }} />
      )}
      <Stack
        spacing={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          minWidth: '300px',
          width: '50%',
        }}
      >
        {data.map(plant => {
          return <PlantCard key={plant.id} plant={plant} />
        })}
      </Stack>
    </Box>
  )
}

export default MyPlants
