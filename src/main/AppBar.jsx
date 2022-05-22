import React from 'react'
import { AppBar as MuiAppBar, Toolbar, IconButton, styled, Typography, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'drawerWidth' && prop !== 'headerHeight',
})(({ theme, open, drawerWidth, headerHeight }) => ({
  height: headerHeight,
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

function AppBar({ open, drawerWidth, onClickOpen, headerHeight }) {
  const navigate = useNavigate()
  return (
    <StyledAppBar position='fixed' open={open} elevation={0} drawerWidth={drawerWidth} headerHeight={headerHeight}>
      <Toolbar>
        <IconButton
          color='primary'
          aria-label='open drawer'
          onClick={onClickOpen}
          edge='start'
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          <Typography variant='h2' noWrap component='div' sx={{ color: '#dcddce', fontFamily: 'Abril Fatface' }}>
            Flora
          </Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  )
}

export default AppBar
