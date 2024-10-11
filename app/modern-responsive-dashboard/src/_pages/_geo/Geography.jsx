import MyResponsiveGeo from './MyResponsiveGeo';
import { Box, useTheme } from '@mui/material'

export default function Geography({ routeTitle }) {
  const theme = useTheme();


  return (
    <Box>
      {routeTitle}
      <Box sx={{
        height: '65vh',
        maxWidth: '88%',
        m: '0 auto'
      }}>
        <MyResponsiveGeo theme={theme} />
      </Box>
    </Box>
  )
}
