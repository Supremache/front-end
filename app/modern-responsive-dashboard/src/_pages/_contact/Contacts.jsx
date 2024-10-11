import {
    styled,
    Avatar,
    Badge,
    Box,
    Grow,
    IconButton,
    Menu,
    Stack,
    Typography,
    alpha,
    useTheme,
    MenuItem,
    TextField,
    Modal,
    Button
  } from '@mui/material';
  import { tokens } from '../../theme';
  import CallIcon from '@mui/icons-material/Call';
  import EmailIcon from '@mui/icons-material/Email';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import { useState } from 'react';
  import EditIcon from '@mui/icons-material/Edit';
  import Divider from '@mui/material/Divider';
  import ArchiveIcon from '@mui/icons-material/Archive';
  import FileCopyIcon from '@mui/icons-material/FileCopy';
  import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
  import DeleteIcon from '@mui/icons-material/Delete';
  
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.background.default,
      borderRadius: 10,
      border: 'none',
      marginTop: theme.spacing(1),
      minWidth: 150,
      color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 8px -3px, rgba(0, 0, 0, 0.05) 0px 2px 4px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 12,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        },
      },
    },
  }));
  
  const EditContactModal = ({ open, onClose, contact, onSave }) => {
    const [editedContact, setEditedContact] = useState({ ...contact });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedContact({ ...editedContact, [name]: value });
    };
  
    const handleSave = () => {
      onSave(editedContact);
      onClose();
    };
  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: theme.palette.background.default,
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            name="title"
            value={editedContact.title}
            onChange={handleChange}
          />
          <TextField
            label="Position"
            name="subTitle"
            value={editedContact.subTitle}
            onChange={handleChange}
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={editedContact.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={editedContact.email}
            onChange={handleChange}
          />
          <Button variant="contained" color="secondary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Modal>
    );
  };
  
  export default function Contacts({routeTitle}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [checked, setChecked] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedContactIndex, setSelectedContactIndex] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [contactData, setContactData] = useState([
      { title: 'Bob Brown', subTitle: 'Project Lead', phoneNumber: '+12 345 67890', email: 'bobbrown@mail.com', color: '#FF5733' },
      { title: 'Alice Smith', subTitle: 'Software Engineer', phoneNumber: '+12 345 67891', email: 'alicesmith@mail.com', color: '#33FF57' },
      { title: 'Charlie Johnson', subTitle: 'Product Manager', phoneNumber: '+12 345 67892', email: 'charliejohnson@mail.com', color: '#3357FF' },
      { title: 'David Williams', subTitle: 'UX Designer', phoneNumber: '+12 345 67893', email: 'davidwilliams@mail.com', color: '#FF33A1' },
      { title: 'Eve Martinez', subTitle: 'QA Tester', phoneNumber: '+12 345 67894', email: 'evemartinez@mail.com', color: '#A133FF' },
      { title: 'Frank Clark', subTitle: 'DevOps Engineer', phoneNumber: '+12 345 67895', email: 'frankclark@mail.com', color: '#FF8C33' },
      { title: 'Grace Lee', subTitle: 'Data Scientist', phoneNumber: '+12 345 67896', email: 'gracelee@mail.com', color: '#33FFF0' },
      { title: 'Hank Allen', subTitle: 'Business Analyst', phoneNumber: '+12 345 67897', email: 'hankallen@mail.com', color: '#FF5733' },
      { title: 'Ivy Young', subTitle: 'Marketing Manager', phoneNumber: '+12 345 67898', email: 'ivyyoung@mail.com', color: '#FF33FF' },
      { title: 'Jack King', subTitle: 'Sales Manager', phoneNumber: '+12 345 67899', email: 'jackking@mail.com', color: '#3371FF' },
      { title: 'Karen Scott', subTitle: 'HR Manager', phoneNumber: '+12 345 67900', email: 'karenscott@mail.com', color: '#FF5733' },
      { title: 'Leo Harris', subTitle: 'Finance Manager', phoneNumber: '+12 345 67901', email: 'leoharris@mail.com', color: '#FF33A1' },
      { title: 'Mia Walker', subTitle: 'Operations Manager', phoneNumber: '+12 345 67902', email: 'miawalker@mail.com', color: '#A133FF' },
      { title: 'Nathan Hall', subTitle: 'IT Support', phoneNumber: '+12 345 67903', email: 'nathanhall@mail.com', color: '#FF8C33' },
      { title: 'Olivia Adams', subTitle: 'Customer Support', phoneNumber: '+12 345 67904', email: 'oliviaadams@mail.com', color: '#33FFF0' },
      { title: 'Paul Baker', subTitle: 'Network Engineer', phoneNumber: '+12 345 67905', email: 'paulbaker@mail.com', color: '#FF33FF' },
      { title: 'Quincy Parker', subTitle: 'Security Analyst', phoneNumber: '+12 345 67906', email: 'quincyparker@mail.com', color: '#3371FF' },
      { title: 'Rachel Evans', subTitle: 'Content Writer', phoneNumber: '+12 345 67907', email: 'rachelevans@mail.com', color: '#FF5733' },
      { title: 'Sam Green', subTitle: 'Graphic Designer', phoneNumber: '+12 345 67908', email: 'samgreen@mail.com', color: '#FF33A1' },
      { title: 'Tina Turner', subTitle: 'SEO Specialist', phoneNumber: '+12 345 67909', email: 'tinaturner@mail.com', color: '#A133FF' }
    ]);
  
    const [moreButton, setMoreButton] = useState(false);
    const open = Boolean(anchorEl);
  
    const handleClick = (event, index) => {
      setAnchorEl(event.currentTarget);
      setSelectedContactIndex(index);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setMoreButton(false);
    };
  
    const handleEdit = () => {
      setEditModalOpen(true);
      handleClose();
    };
  
    const handleSave = (editedContact) => {
      setContactData(contactData.map((contact, index) => (index === selectedContactIndex ? editedContact : contact)));
      setEditModalOpen(false);
    };
  
    const handleDuplicate = () => {
      const newContact = { ...contactData[selectedContactIndex], title: `${contactData[selectedContactIndex].title} (Copy)` };
      setContactData([...contactData, newContact]);
      handleClose();
    };
  
    const handleMore = (() => {
      setMoreButton(true);
    });
  
    const handleDelete = () => {
      setContactData(contactData.filter((_, index) => index !== selectedContactIndex));
      handleClose();
    };
  
    return (
      <Box>
        {routeTitle}
        <Box sx={{
        filter: editModalOpen === true ? 'blur(8px)' : 'blur(0px)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 2,
        p: 3
      }}>
        
        
        {contactData.map((item, index) => (
          <Grow
            key={index}
            in={checked}
            style={{ transformOrigin: '0 0 1' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: alpha(colors.primary[400], 0.77),
                borderRadius: '10px',
                border: `1px solid ${alpha(colors.blueAccent[500], 0.16)}`,
                width: '25vh',
                gap: 2,
                p: 2,
                position: 'relative',
                '&:hover': {
                  rotate: '1deg',
                  cursor: 'pointer',
                  border: `1px solid ${alpha(colors.blueAccent[500], 0.36)}`,
                }
              }}
            >
              <IconButton
                id={`demo-customized-button-${index}`}
                aria-controls={open ? `demo-customized-menu-${index}` : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={(event) => handleClick(event, index)}
                sx={{ position: 'absolute', right: 10 }}
              >
                <MoreVertIcon sx={{ position: 'absolute' }} />
              </IconButton>
  
              {selectedContactIndex === index && (
                <StyledMenu
                  id={`demo-customized-menu-${index}`}
                  MenuListProps={{
                    'aria-labelledby': `demo-customized-button-${index}`,
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleEdit} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleDuplicate} disableRipple>
                    <FileCopyIcon />
                    Duplicate
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <ArchiveIcon />
                    Archive
                  </MenuItem>
  
                  {moreButton ?
                    (
                      <MenuItem onClick={handleDelete} disableRipple>
                        <DeleteIcon />
                        Delete
                      </MenuItem>
                    )
                    :
                    (
                      <MenuItem onClick={handleMore} disableRipple>
                        <MoreHorizIcon />
                        More
                      </MenuItem>
                    )}
                </StyledMenu>
              )}
  
              <Stack direction={'column'} gap={2} alignItems={'center'} textAlign={'center'}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={
                    <Avatar
                      variant="square"
                      children={`${item.subTitle.split(' ')[0][0]}${item.subTitle.split(' ')[1][0]}`}
                      sx={{
                        bgcolor: `${item.color}`,
                        width: 30,
                        height: 30,
                        border: `2px solid ${theme.palette.background.paper}`,
                        borderRadius: '10px'
                      }}
                    />
                  }
                >
                  <Avatar
                    alt="John Doe"
                    variant="square"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4lThm0Oono1MosZTiMz5BU1oPpebzKtFfIeX-e0RjdQeKGUw1-eV0oMkIWIFcLpWgGzs6tFnSDyxGl_UYskvyK2u-hB-WxhHmo01yK52ajGVDzh9UoE2eZoWQxZJIAqMFEyHgX6viw7Z-/s1600/male+model+blog+7.jpg"
                    sx={{ width: 66, height: 66, borderRadius: '10px' }}
                  />
                </Badge>
                <Box>
                  <Typography variant="h5" fontWeight={'bold'} color={colors.primary[100]}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" letterSpacing={1.5} color={item.color}>
                    {item.subTitle}
                  </Typography>
                </Box>
              </Stack>
  
              <Stack direction={"column"} gap={1}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center'
                  }}
                >
                  <CallIcon
                    sx={{
                      p: 1,
                      borderRadius: '10px',
                      fontSize: 30,
                      bgcolor: alpha(colors.blueAccent[500], 0.16)
                    }}
                  />
                  <Typography variant="body1" color={colors.primary[100]}>
                    {item.phoneNumber}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center'
                  }}
                >
                  <EmailIcon
                    sx={{
                      p: 1,
                      borderRadius: '10px',
                      fontSize: 30,
                      bgcolor: alpha(colors.blueAccent[500], 0.16)
                    }}
                  />
                  <Typography variant="body1" color={colors.primary[100]}>
                    {item.email}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grow>
        ))}
  
        {selectedContactIndex !== null && (
          <EditContactModal
            open={editModalOpen}
            onClose={() => setEditModalOpen(false)}
            contact={contactData[selectedContactIndex]}
            onSave={handleSave}
          />
        )}
      </Box>
      </Box>
      
    );
  }
  