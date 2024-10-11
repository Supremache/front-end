import { Box, useTheme } from '@mui/material'
import MyResponsiveLine from './MyResponsiveLine';

export default function Line({ routeTitle }) {
  const theme = useTheme();

  const LineData = [
    {
      "id": "Management",
      "color": "hsl(20, 70%, 50%)",
      "data": [
        { "x": "Bob Brown", "y": 180 },
        { "x": "Charlie Johnson", "y": 220 },
        { "x": "Leo Harris", "y": 150 },
        { "x": "Mia Walker", "y": 75 },
        { "x": "Alice Smith", "y": 90 },
        { "x": "Frank Clark", "y": 270 },
        { "x": "Paul Baker", "y": 130 },
        { "x": "Nathan Hall", "y": 60 },
        { "x": "David Williams", "y": 300 },
        { "x": "Sam Green", "y": 45 },
        { "x": "Eve Martinez", "y": 110 },
        { "x": "Tina Turner", "y": 255 }
      ]
    },
    {
      "id": "Engineering",
      "color": "hsl(45, 70%, 50%)",
      "data": [
        { "x": "Bob Brown", "y": 130 },
        { "x": "Charlie Johnson", "y": 95 },
        { "x": "Leo Harris", "y": 85 },
        { "x": "Mia Walker", "y": 190 },
        { "x": "Alice Smith", "y": 140 },
        { "x": "Frank Clark", "y": 260 },
        { "x": "Paul Baker", "y": 170 },
        { "x": "Nathan Hall", "y": 100 },
        { "x": "David Williams", "y": 220 },
        { "x": "Sam Green", "y": 75 },
        { "x": "Eve Martinez", "y": 195 },
        { "x": "Tina Turner", "y": 205 }
      ]
    },
    {
      "id": "Design",
      "color": "hsl(90, 70%, 50%)",
      "data": [
        { "x": "Bob Brown", "y": 210 },
        { "x": "Charlie Johnson", "y": 130 },
        { "x": "Leo Harris", "y": 290 },
        { "x": "Mia Walker", "y": 80 },
        { "x": "Alice Smith", "y": 230 },
        { "x": "Frank Clark", "y": 180 },
        { "x": "Paul Baker", "y": 60 },
        { "x": "Nathan Hall", "y": 150 },
        { "x": "David Williams", "y": 270 },
        { "x": "Sam Green", "y": 120 },
        { "x": "Eve Martinez", "y": 75 },
        { "x": "Tina Turner", "y": 145 }
      ]
    },
    {
      "id": "Quality Assurance",
      "color": "hsl(135, 70%, 50%)",
      "data": [
        { "x": "Bob Brown", "y": 125 },
        { "x": "Charlie Johnson", "y": 155 },
        { "x": "Leo Harris", "y": 210 },
        { "x": "Mia Walker", "y": 190 },
        { "x": "Alice Smith", "y": 70 },
        { "x": "Frank Clark", "y": 40 },
        { "x": "Paul Baker", "y": 180 },
        { "x": "Nathan Hall", "y": 85 },
        { "x": "David Williams", "y": 295 },
        { "x": "Sam Green", "y": 250 },
        { "x": "Eve Martinez", "y": 90 },
        { "x": "Tina Turner", "y": 240 }
      ]
    },
    {
      "id": "Data Science",
      "color": "hsl(180, 70%, 50%)",
      "data": [
        { "x": "Bob Brown", "y": 100 },
        { "x": "Charlie Johnson", "y": 190 },
        { "x": "Leo Harris", "y": 220 },
        { "x": "Mia Walker", "y": 135 },
        { "x": "Alice Smith", "y": 65 },
        { "x": "Frank Clark", "y": 255 },
        { "x": "Paul Baker", "y": 120 },
        { "x": "Nathan Hall", "y": 45 },
        { "x": "David Williams", "y": 185 },
        { "x": "Sam Green", "y": 70 },
        { "x": "Eve Martinez", "y": 215 },
        { "x": "Tina Turner", "y": 280 }
      ]
    },
    {
      "id": "Business",
      "color": "hsl(225, 70%, 50%)",
      "data": [
        { "x": "Bob Brown", "y": 160 },
        { "x": "Charlie Johnson", "y": 120 },
        { "x": "Leo Harris", "y": 290 },
        { "x": "Mia Walker", "y": 90 },
        { "x": "Alice Smith", "y": 275 },
        { "x": "Frank Clark", "y": 200 },
        { "x": "Paul Baker", "y": 130 },
        { "x": "Nathan Hall", "y": 160 },
        { "x": "David Williams", "y": 195 },
        { "x": "Sam Green", "y": 180 },
        { "x": "Eve Martinez", "y": 60 },
        { "x": "Tina Turner", "y": 240 }
      ]
    },
    {
      "id": "Marketing",
      "color": "hsl(270, 70%, 50%)",
      "data": [
        { "x": "Bob Brown", "y": 195 },
        { "x": "Charlie Johnson", "y": 115 },
        { "x": "Leo Harris", "y": 225 },
        { "x": "Mia Walker", "y": 175 },
        { "x": "Alice Smith", "y": 105 },
        { "x": "Frank Clark", "y": 85 },
        { "x": "Paul Baker", "y": 240 },
        { "x": "Nathan Hall", "y": 270 },
        { "x": "David Williams", "y": 200 },
        { "x": "Sam Green", "y": 135 },
        { "x": "Eve Martinez", "y": 125 },
        { "x": "Tina Turner", "y": 140 }
      ]
    },
    {
      "id": "Human Resources",
      "color": "hsl(315, 70%, 50%)",
      "data": [
        { "x": "Bob Brown", "y": 110 },
        { "x": "Charlie Johnson", "y": 175 },
        { "x": "Leo Harris", "y": 130 },
        { "x": "Mia Walker", "y": 195 },
        { "x": "Alice Smith", "y": 150 },
        { "x": "Frank Clark", "y": 125 },
        { "x": "Paul Baker", "y": 115 },
        { "x": "Nathan Hall", "y": 250 },
        { "x": "David Williams", "y": 160 },
        { "x": "Sam Green", "y": 105 },
        { "x": "Eve Martinez", "y": 270 },
        { "x": "Tina Turner", "y": 145 }
      ]
    }
  ]


  return (
    <Box>
      {routeTitle}
      <Box sx={{
        height: '65vh',
        maxWidth: '88%',
        m: '0 auto'
      }}>
        <MyResponsiveLine LineData={LineData} scheme={'nivo'} />
      </Box>
    </Box>
  )
}
