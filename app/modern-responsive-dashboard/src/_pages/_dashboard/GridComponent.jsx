import { Avatar, Box, Chip, Typography, alpha } from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CachedIcon from '@mui/icons-material/Cached';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import InfoIcon from '@mui/icons-material/Info';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function GridComponent({ theme, colors, gridData }) {

  const columns = [
    { field: 'id', headerName: '#No.', width: 50 },
    { field: 'projectName', headerName: 'Project Name', width: 150 },
    { field: 'data', headerName: 'Data', width: 100 },
    {
      field: 'price',
      headerName: 'Price',
      width: 75,
      renderCell: (params) => (
        <span>
          ${new Intl.NumberFormat().format(params.value)}
        </span>
      ),
    },
    {
      field: 'stats',
      headerName: 'Stats',
      width: 110,
      renderCell: (params) => {
        let icon;
        let color;

        switch (params.value) {
          case 'Completed':
            icon = <CheckCircleIcon />;
            color = 'success';
            break;
          case 'In Progress':
            icon = <CachedIcon />;
            color = 'warning';
            break;
          default:
            icon = <HourglassTopIcon />;
            color = 'default';
        }

        return (
          <Box>
            <Chip icon={icon} size="small" label={params.value} variant="outlined"
              // @ts-ignore
              color={color} />
          </Box>
        );
      },
    },
    { field: 'gmail', headerName: 'Gmail', width: 200 },
    {
      field: 'customer',
      headerName: 'Customer',
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar
            style={{ width: 30, height: 30 }}
            src={params.value.src}
            alt={params.value.name}
            variant="rounded"
          />

          <span>{params.value.name}</span>
        </Box>
      ),
    },
  ];

  return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 450,
        width: '100%',
        bgcolor: alpha(colors.primary[400], .77),
        border: `2px solid ${colors.primary[400]}`,
        borderRadius: '10px',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          m: 2,
          gap: 1,
          alignItems: 'center',
        }}>
          <BusinessCenterIcon />
          <Typography variant="body1" fontWeight={600} color="neutral">Recent Orders</Typography>
        </Box>
        <DataGrid
          // @ts-ignore
          sx={{
            border: `none`,
            borderRadius: '10px',
            '& .MuiDataGrid-toolbarContainer .MuiButton-root': {
              m: 0,
              backgroundColor: alpha(colors.primary[400], .77),
              borderRadius: '10px',
              color: theme.palette.secondary.light,
              opacity: .8,
              '&:hover': {
                opacity: 1,
                backgroundColor: 'transparent',
              }
            },
            '& .MuiDataGrid-columnHeaders': {
              color: theme.palette.primary,
            },
            '& .MuiDataGrid-cell': {
              color: theme.palette.primary,
            },
            '& .MuiDataGrid-row': {
              '&:nth-of-type(odd)': {
                backgroundColor: alpha(colors.primary[400], .77),
              },
            },
          }}
          columns={columns}
          rows={gridData}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
  )
}
