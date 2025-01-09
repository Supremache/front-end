import * as React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Box, Button, Drawer, IconButton } from '@mui/joy';
// @ts-ignore
import Info from './Info';


function InfoMobile({ InfoComponent }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 'auto', px: 3, pb: 3, pt: 8 }} role="presentation">
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      {InfoComponent}
    </Box>
  );

  return (
    <Box>
      <Button
        component={"text"}
        variant="soft"
        endDecorator={<ExpandMoreRoundedIcon />}
        onClick={toggleDrawer(true)}
      >
        View details
      </Button>
      <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}

InfoMobile.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default InfoMobile;