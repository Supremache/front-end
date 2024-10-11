import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, alpha, useTheme } from '@mui/material';
import { tokens } from '../../theme';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  { field: 'position', headerName: 'Position', width: 160 },
  { field: 'department', headerName: 'Department', width: 160 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'startDate', headerName: 'Start Date', type: 'date', width: 150 }
];

const rows = [
  { id: 1, name: 'John Doe', age: 30, position: 'Manager', department: 'Sales', status: 'Active', startDate: new Date('2020-01-01') },
  { id: 2, name: 'Jane Smith', age: 40, position: 'Senior Developer', department: 'IT', status: 'Active', startDate: new Date('2019-03-15') },
  { id: 3, name: 'Alice Johnson', age: 28, position: 'HR Specialist', department: 'HR', status: 'Active', startDate: new Date('2021-06-20') },
  { id: 4, name: 'Bob Brown', age: 35, position: 'Project Lead', department: 'Operations', status: 'Inactive', startDate: new Date('2018-10-01') },
  { id: 5, name: 'Charlie White', age: 50, position: 'CEO', department: 'Management', status: 'Active', startDate: new Date('2015-04-30') },
  { id: 6, name: 'David Black', age: 45, position: 'CTO', department: 'IT', status: 'Active', startDate: new Date('2016-07-15') },
  { id: 7, name: 'Emily Green', age: 32, position: 'Marketing Director', department: 'Marketing', status: 'Active', startDate: new Date('2017-11-01') },
  { id: 8, name: 'Frank Blue', age: 29, position: 'Accountant', department: 'Finance', status: 'Active', startDate: new Date('2020-05-12') },
  { id: 9, name: 'Grace Yellow', age: 26, position: 'Graphic Designer', department: 'Creative', status: 'Active', startDate: new Date('2021-09-05') },
  { id: 10, name: 'Henry Orange', age: 38, position: 'Operations Manager', department: 'Operations', status: 'Active', startDate: new Date('2018-12-20') },
  { id: 11, name: 'Isabel Purple', age: 31, position: 'HR Manager', department: 'HR', status: 'Active', startDate: new Date('2019-08-14') },
  { id: 12, name: 'Jack Pink', age: 27, position: 'Junior Developer', department: 'IT', status: 'Inactive', startDate: new Date('2021-02-10') },
  { id: 13, name: 'Karen Silver', age: 34, position: 'Content Writer', department: 'Marketing', status: 'Active', startDate: new Date('2020-03-01') },
  { id: 14, name: 'Leo Gold', age: 42, position: 'Sales Director', department: 'Sales', status: 'Active', startDate: new Date('2016-10-25') },
  { id: 15, name: 'Mia Red', age: 36, position: 'Finance Manager', department: 'Finance', status: 'Active', startDate: new Date('2017-04-19') },
  { id: 16, name: 'Nathan Indigo', age: 25, position: 'Intern', department: 'HR', status: 'Inactive', startDate: new Date('2022-01-10') },
  { id: 17, name: 'Olivia Brown', age: 33, position: 'UX Designer', department: 'Creative', status: 'Active', startDate: new Date('2019-05-22') },
  { id: 18, name: 'Paul Cyan', age: 37, position: 'Business Analyst', department: 'Finance', status: 'Active', startDate: new Date('2018-09-10') },
  { id: 19, name: 'Quinn Violet', age: 28, position: 'Social Media Manager', department: 'Marketing', status: 'Active', startDate: new Date('2020-12-01') },
  { id: 20, name: 'Rachel Magenta', age: 39, position: 'Customer Support Lead', department: 'Support', status: 'Active', startDate: new Date('2017-06-11') }
];


export default function Team({routeTitle}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box>
      {routeTitle}

      <Box sx={{
      height: '60vh',
      width: '100%',
      alignSelf: 'center',
      p: 3,
    }}>
      
      <DataGrid
        // @ts-ignore
        columns={columns}
        rows={rows}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // @ts-ignore
        sx={{
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
            justifyContent: 'space-b',
          },
          '& .MuiDataGrid-cell': {
            color: theme.palette.primary,
          },
          '& .MuiDataGrid-row': {
            '&:nth-of-type(odd)': {
              
              backgroundColor: alpha(colors.primary[400], .77),
            },
            // '&:nth-of-type(even)': {
            // },
          },
        }}
        localeText={{
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large',
        }}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
    </Box>
  );
}
