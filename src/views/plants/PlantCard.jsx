import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FilterVintageIcon from '@mui/icons-material/FilterVintageOutlined'
import { Card, CardActions, CardContent, CardHeader, Collapse, IconButton, styled, Typography } from '@mui/material'
import React from 'react'

const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} color='primary' />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const PlantCard = ({ plant }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      key={plant.id}
      elevation={4}
      id='thisOne'
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
    >
      <CardHeader avatar={<FilterVintageIcon />} title={plant.nickname} />
      <CardActions disableSpacing>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Care Instructions</Typography>
          <Typography paragraph>{plant.careInst}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default PlantCard
