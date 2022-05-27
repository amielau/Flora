import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FilterVintageIcon from '@mui/icons-material/FilterVintageOutlined'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  styled,
  Typography,
} from '@mui/material'
import React, { useMemo } from 'react'

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

const urls = [
  'https://h2.commercev3.net/www.dutchgardens.com/images/400/77836.jpg',
  'https://h2.commercev3.net/www.dutchgardens.com/images/400/77941.jpg',
  'https://h2.commercev3.net/www.dutchgardens.com/images/400/78030.jpg',
  'https://h2.commercev3.net/www.dutchgardens.com/images/400/77031.jpg',
  'https://h2.commercev3.net/www.dutchgardens.com/images/400/78072.jpg',
]

const PlantCard = ({ plant }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const randomSrc = useMemo(() => urls[Math.floor(Math.random() * urls.length)], [])

  return (
    <Card key={plant.id} elevation={4} id='thisOne' sx={{ overflow: 'unset' }}>
      <CardHeader avatar={<FilterVintageIcon />} title={plant.nickname} />
      <CardMedia
        component='img'
        image={randomSrc}
        alt='plant'
        sx={{ height: '190px' }}
        // style={{ height: 0, paddingTop: '56.25%' }}
      />
      <CardActions disableSpacing>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto'>
        <CardContent>
          <Typography paragraph>Care Instructions</Typography>
          <Typography paragraph>{plant.careInst}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default PlantCard
