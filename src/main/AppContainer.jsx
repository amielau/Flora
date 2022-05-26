import AddCircleIcon from '@mui/icons-material/AddCircle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CottageIcon from '@mui/icons-material/Cottage'
import FaceIcon from '@mui/icons-material/Face'
import FavoriteIcon from '@mui/icons-material/Favorite'
import YardIcon from '@mui/icons-material/Yard'
import { Box, Container, Divider, Drawer as MuiDrawer, IconButton, List, styled, useTheme } from '@mui/material'
import React from 'react'
import AppBar from './AppBar'
import NavItem from './NavItem'
import Routes from './Routes'

const drawerWidth = 240
const headerHeight = '70px'

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: headerHeight,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

function AppContainer() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', flex: '1' }}>
      <AppBar open={open} onClickOpen={handleDrawerOpen} drawerWidth={drawerWidth} headerHeight={headerHeight} />
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Profile', Icon: FaceIcon, route: '/profile' },
            { text: 'Home', Icon: CottageIcon, route: '/' },
          ].map(({ text, Icon, route }, index) => (
            <NavItem key={text} open={open} text={text} Icon={Icon} route={route} />
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: 'Add Plant', Icon: AddCircleIcon, route: '/addPlant' },
            { text: 'Care', Icon: FavoriteIcon, route: '/care' },
            { text: 'My Plants', Icon: YardIcon, route: '/myPlants' },
          ].map(({ text, Icon, route }, index) => (
            <NavItem key={text} open={open} text={text} Icon={Icon} route={route} />
          ))}
        </List>
      </Drawer>
      <Container>
        <DrawerHeader />
        <Routes />
      </Container>
    </Box>
  )
}

export default AppContainer
