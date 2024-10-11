import { Box, useTheme } from '@mui/material'
import MyResponsivePie from './MyResponsivePie';

export default function Pie({routeTitle}) {
  const theme = useTheme();
  
  const PieData = [
    { "id": "JavaScript", "label": "JavaScript", "value": 208, "color": "hsl(138, 70%, 50%)" },
    { "id": "Python", "label": "Python", "value": 433, "color": "hsl(265, 70%, 50%)" },
    { "id": "Java", "label": "Java", "value": 348, "color": "hsl(188, 70%, 50%)" },
    { "id": "C++", "label": "C++", "value": 398, "color": "hsl(121, 70%, 50%)" },
    { "id": "Go", "label": "Go", "value": 354, "color": "hsl(237, 70%, 50%)" }
  ]


  return (
    <Box>
      {routeTitle}
      <Box sx={{
      height: '65vh',
      maxWidth: '88%',
      m: '0 auto'
    }}>
      <MyResponsivePie theme={theme} PieData={PieData} scheme={'nivo'} />
    </Box>
    </Box>
  )
}
