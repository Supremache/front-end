import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import TopBar from './_components/TopBar'
import { ColorModeContext, useMode } from './theme'
import SideBar from './_components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './_pages/_dashboard/Dashboard';
import Team from './_pages/_team/Team';
import Contacts from './_pages/_contact/Contacts';
import Calendar from './_pages/_calendar/Calendar';
import Bar from './_pages/_bar/Bar';
import Pie from './_pages/_pie/Pie';
import Line from './_pages/_line/Line';
import Geography from './_pages/_geo/Geography';

function App() {
  const [theme, colorMode] = useMode();
  const RouteTitle = ({title, subTitle = null}) => {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        m: '.5em 2em',
      }}>
        <Typography
          fontWeight={600}
          variant="h3"
          // @ts-ignore
          color={theme.palette.secondary.main}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          // @ts-ignore
          color={theme.palette.neutral.main}
          letterSpacing={1}
        >
          {subTitle}
        </Typography>
      </Box>
    );
  };

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard routeTitle={<RouteTitle title={'Dashboard overview'} subTitle={'Welcome back, Cindy Baker!'} />} colorMode={colorMode}/>} />
              <Route path="/team" element={<Team routeTitle={<RouteTitle title={'Our team'} subTitle={''} />} />} />
              <Route path="/contacts" element={<Contacts routeTitle={<RouteTitle title={'Contacts'} subTitle={''} />} />} />
              <Route path="/calendar" element={<Calendar routeTitle={<RouteTitle title={'Calendar'} subTitle={''} />} />} />
              <Route path="/bar" element={<Bar routeTitle={<RouteTitle title={'Bar'} subTitle={''} />} />} />
              <Route path="/pie" element={<Pie routeTitle={<RouteTitle title={'Pie'} subTitle={''} />} />} />
              <Route path="/line" element={<Line routeTitle={<RouteTitle title={'Line'} subTitle={''} />} />} />
              <Route path="/geography" element={<Geography routeTitle={<RouteTitle title={'Geo'} subTitle={''} />} />} />
            </Routes>
          </main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
