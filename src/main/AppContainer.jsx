import React from 'react'
import { Drawer as MuiDrawer, Box, Divider, IconButton, List, useTheme, styled } from '@mui/material'
import YardIcon from '@mui/icons-material/Yard'
import FaceIcon from '@mui/icons-material/Face'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CottageIcon from '@mui/icons-material/Cottage'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Routes from './Routes'
import AppBar from './AppBar'
import NavItem from './NavItem'

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
    <Box sx={{ display: 'flex' }}>
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
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes />
      </Box>
    </Box>
  )
}

export default AppContainer
