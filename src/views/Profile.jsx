import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthenticate } from '../hooks/useAuthenticate'

function Profile() {
  const navigate = useNavigate()
  const { logout, user } = useAuthenticate()

  const handleLogout = () => {
    logout(() => navigate('/'))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        justifyContent: 'space-between',
      }}
    >
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Typography>Full Name</Typography>
          <Typography variant='h6'>{user.fullName}</Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography>UserName</Typography>
          <Typography variant='h6'>{user.username}</Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography>Email</Typography>
          <Typography variant='h6'>{user.email}</Typography>
        </Stack>
        <img src='' alt='' />
      </Stack>
      <Divider />
      <Stack spacing={4}>
        <Button variant='outlined'> Write A Review</Button>
        <Button onClick={handleLogout} variant='outlined'>
          Logout
        </Button>
      </Stack>
    </Box>
  )
}
export default Profile
