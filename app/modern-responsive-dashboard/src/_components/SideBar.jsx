import { Avatar, Box, Divider, IconButton, Tooltip, Typography, alpha, styled, useTheme } from '@mui/material'
import { tokens } from '../theme';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MapIcon from '@mui/icons-material/Map';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


const arrHome = [{ text: 'Dashboard', icon: <HomeIcon />, path: '/' }];
const arrData = [
  { text: 'Manage Team', icon: <GroupsIcon />, path: '/team' },
  { text: 'Contacts', icon: <ContactSupportIcon />, path: '/contacts' },
  { text: 'Calendar', icon: <EditCalendarIcon />, path: '/calendar' }
];

const arrChart = [
  { text: 'Bar', icon: <BarChartIcon />, path: '/bar' },
  { text: 'Pie', icon: <DataUsageIcon />, path: '/pie' },
  { text: 'Line', icon: <ShowChartIcon />, path: '/line' },
  { text: 'Geography', icon: <MapIcon />, path: '/geography' },
];

export default function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(matches);
  const toggleDrawer = () => setOpen((prevState) => !prevState);
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  const renderMenuItems = (items, open) => {
    return items.map((item) => (
      <Tooltip key={item.path} title={open ? null : item.text} placement="right" arrow>
        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            gap: open ? 1.5 : 0,
            p: 1,
            borderRadius: '10px',
            opacity: location.pathname === item.path ? 1 : 0.7,
            transition: '0.3s ease !important',
            bgcolor: location.pathname === item.path ? colors.primary[400] : 'transparent',
            '&:hover': {
              bgcolor: colors.primary[400],
              cursor: 'pointer',
              opacity: 1,
            },
          })}
          onClick={() => { navigate(item.path); }}
        >
          {item.icon}
          <Typography variant="body1">{open ? item.text : null}</Typography>
        </Box>
      </Tooltip>
    ));
  };

  return (
    <Box sx={{
      display: 'flex',
      height: '100%',
      transition: '0.3s ease !important',
      width: open ? '255px' : '77px',
      flexDirection: 'column',
      p: open ? '1.2em .5em 0 1em' : '1.2em .5em 0 0',
      gap: 2,
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: .5, alignItems: 'center', ml: 2.8 }}>
          <Avatar alt="LB" src="https://as2.ftcdn.net/v2/jpg/07/89/85/35/1000_F_789853572_XSSL2ovCJZMAIREgvsD4clYdeanEg3Qf.webp" variant="rounded" sx={{ width: 28, height: 28 }} />
          <Typography variant="h4" color={theme.palette.primary[500]}>{open ? 'LightBlue' : null}</Typography>
        </Box>
        <IconButton onClick={toggleDrawer} >
          {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
        </IconButton>
      </Box>

      <Divider variant="middle" />

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: .5,
        textAlign: open ? 'left' : "center",
        alignItems: open ? 'left' : "center",
      }}>
        <Typography sx={{
          fontSize: '11px',
          color: `${colors.grey[400]}`,
        }}>Home</Typography>

        {renderMenuItems(arrHome, open)}
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: .5,
        textAlign: open ? 'left' : "center",
        alignItems: open ? 'left' : "center",
      }}>
        <Typography sx={{
          fontSize: '11px',
          color: `${colors.grey[400]}`,
        }}>Data</Typography>

        {renderMenuItems(arrData, open)}
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: .5,
        textAlign: open ? 'left' : "center",
        alignItems: open ? 'left' : "center",
      }}>
        <Typography sx={{
          fontSize: '11px',
          color: `${colors.grey[400]}`,
        }}>Charts</Typography>
        {renderMenuItems(arrChart, open)}
      </Box>

      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          display: open ? 'flex' : 'none',
          alignItems: 'center',
          bgcolor: alpha(colors.primary[400], .77),
          border: `2px solid ${colors.primary[400]}`,
          borderRadius: '10px',
          justifyContent: 'space-between',
          height: '80px',
          gap: 1,
          p: 1,
          my: 2,
        }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-alipazani-2787341.jpg&fm=jpg" />
        </StyledBadge>
        <Box>
          <Typography variant="body1" color={colors.primary[100]}>Cindy Baker</Typography>
          <Typography variant="body2" color={colors.redAccent[500]}>Admin</Typography>
        </Box>
        <Tooltip title={'logout'} placement="right" arrow>
        <IconButton>
          <PowerSettingsNewIcon />
        </IconButton>
        </Tooltip>
      </Box>
      
    </Box >
  )
}
