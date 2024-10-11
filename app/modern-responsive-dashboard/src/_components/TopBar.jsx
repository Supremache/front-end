import { Badge, Box, Divider, IconButton, InputBase, Stack, alpha, styled, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from '../theme';
import { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsIcon from '@mui/icons-material/Settings';
import PublicIcon from '@mui/icons-material/Public';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   transition: '.3s ease',
//   backgroundColor: alpha(theme.palette.common.black, 0.),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.black, 0.25),
//   },
//   marginLeft: 0,
//   marginRight: 10,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '33ch',
      },
    },
  },
}));

export default function () {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        justifyContent: "space-between",
      }}>
      <Box sx={{
        position: 'relative',
        borderRadius: '10px',
        transition: '.3s ease',
        backgroundColor: alpha(colors.primary[400], .77),
        '&:hover': {
          backgroundColor: colors.primary[400],
        },
        marginLeft: 0,
        marginRight: 10,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>

      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <IconButton>
          <Badge color="error" badgeContent={100}>
            <ChatBubbleIcon />
          </Badge>
          {/* <Box sx={{
            p: '0 .3rem',
            textAlign: "center",
            alignItems: "center",
            bgcolor: colors.redAccent[500],
            borderRadius: "50%",
            position: "absolute",
            top: -3,
            left: 20,
          }}>
            <Typography variant="body2" color={colors.primary[100]}>99</Typography>
          </Box> */}
        </IconButton>

        <Divider orientation="vertical" variant="middle" flexItem />

        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <PublicIcon />
        </IconButton>

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon />
          )}

        </IconButton>
      </Stack>
    </Box>
  )
}
