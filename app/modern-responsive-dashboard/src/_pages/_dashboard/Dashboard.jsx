import { Box, Chip, Stack, Typography, alpha, useTheme } from '@mui/material'
import { tokens } from '../../theme';
import { feedbackData, gridData, projectData, saleDate, sideCardData, staffData, trafficData } from './data';
import MyResponsivePie from '../../_pages/_pie/MyResponsivePie';
import MyResponsiveGeo from '../../_pages/_geo/MyResponsiveGeo';
import CardComponent from './CardComponent';
import DateComponent from './DateComponent';
import AdsComponent from './AdsComponent';
import GridComponent from './GridComponent';
import SideCardComponent from './SideCardComponent';
import RateReviewIcon from '@mui/icons-material/RateReview';
import FeedbackComponent from './FeedbackComponent';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import PaidIcon from '@mui/icons-material/Paid';
import MapIcon from '@mui/icons-material/Map';

export default function Dashboard({ routeTitle, colorMode }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const uxDesignerData = staffData[0].data.find(item => item.x === "UX Designer");
  const uxDesignerValue = uxDesignerData ? uxDesignerData.y : null;

  const devRoles = [
    "Software Engineer",
    "DevOps Engineer",
    "QA Tester",
  ];

  const totalDevValues = staffData[0].data
    .filter(item => devRoles.includes(item.x))
    .reduce((total, item) => total + item.y, 0);



  return (
    <Box>
      {routeTitle}

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        p: 3,
        gap: 1,
      }}>
        {/* Left Section */}
        <Stack direction="column" sx={{ width: '100%', maxWidth: "68%", minWidth: "300px" }} spacing={2} alignItems={'center'}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <CardComponent title={"Total Staff"} data={staffData} icon={<GroupIcon />} color={"hsl(27, 61%, 77%)"} scheme={"nivo"} />
            <CardComponent title={"Total Projects"} data={projectData} icon={<BusinessCenterIcon />} color={"hsl(120, 41%, 64%)"} scheme={"accent"} />
            <CardComponent title={"Total Sales"} data={saleDate} icon={<AttachMoneyIcon />} color={"hsl(201, 52%, 76%)"} scheme={"paired"} isSale={true} />
          </Box>

          <AdsComponent colors={colors} />
          <GridComponent theme={theme} colors={colors} gridData={gridData} />

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between',
            gap: 1,
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '49%',
              bgcolor: alpha(colors.primary[400], .77),
              border: `2px solid ${colors.primary[400]}`,
              borderRadius: '10px',
              justifyContent: 'space-between',
              height: '405px',
              flexGrow: 1,
              gap: 1,
              p: 2,
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
              }}>
                <PaidIcon />
                <Typography variant="h5" fontWeight={600} color="text.primary">Recent Traffics</Typography>
              </Box>

              <Box sx={{
                height: '35vh',
              }}>
                <MyResponsivePie theme={theme} PieData={trafficData} isDashboard={true} scheme={'paired'} />
              </Box>

            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '49%',
              bgcolor: alpha(colors.primary[400], .77),
              border: `2px solid ${colors.primary[400]}`,
              borderRadius: '10px',
              justifyContent: 'space-between',
              height: '405px',
              flexGrow: 1,
              gap: 1,
              p: 2,
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
              }}>
                <MapIcon />
                <Typography variant="h5" fontWeight={600} color="text.primary">Geography</Typography>
              </Box>

              <Box sx={{
                height: '35vh',
              }}>
                <MyResponsiveGeo theme={theme} isDashboard={true} />
              </Box>

            </Box>

          </Box>
        </Stack>

        {/* Right Section */}
        <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: {xs: '68%', lg: '30%' }, minWidth: "300px" }} >
          <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: alpha(colors.primary[400], .77),
            width: "100%",
            margin: '0 auto',
            height: '620px',
            border: `2px solid ${colors.primary[400]}`,
            borderRadius: '10px',
            p: 2,
            gap: 3,
          }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
              <InfoIcon />
              <Typography variant="h5" fontWeight={600} color="text.primary">Informations</Typography>
            </Box>

            <DateComponent theme={theme} />

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,

            }} >
              <Box m={.5}>
                <Chip label={'Our Team'} size="small" />
              </Box>
              <SideCardComponent theme={theme} colors={colors} title={'Developers'} subTitle={'devs'} value={378} data={sideCardData.first} projects={totalDevValues} icon={<CodeIcon />} />
              <SideCardComponent theme={theme} colors={colors} title={'UI/UX Designers'} subTitle={'desingers'} value={139} data={sideCardData.second} projects={uxDesignerValue} icon={<BrushIcon />} />
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: alpha(colors.primary[400], .77),
            width: "100%",
            border: `2px solid ${colors.primary[400]}`,
            borderRadius: '10px',
            p: 2,
            gap: 2,
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              alignItems: 'center',
            }}>
              <RateReviewIcon />
              <Typography variant="h5" fontWeight={600} color="neutral">Customers feedback</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: "100%",
              height: '330px',
              overflowX: 'hidden',
              gap: 2,
            }}>


              <FeedbackComponent theme={theme} data={feedbackData} />
            </Box>

          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
