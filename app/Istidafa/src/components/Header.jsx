import * as React from "react";
import { useColorScheme, useTheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Avatar from "@mui/joy/Avatar";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Tooltip from "@mui/joy/Tooltip";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import ListDivider from "@mui/joy/ListDivider";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Link } from "@mui/joy";
import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PagesData } from "./data";
import Navigation from "./Navigation";

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <Tooltip title="Change theme" variant="outlined">
      <IconButton
        data-screenshot="toggle-mode"
        size="sm"
        variant="outlined"
        color="neutral"
        sx={{ alignSelf: "center" }}
        onClick={() => {
          if (mode === "light") {
            setMode("dark");
          } else {
            setMode("light");
          }
        }}
      >
        {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}

function NavMenuButton({
  label,
  open,
  onOpen,
  onLeaveMenu,
  menu,
  startDecorator,
  endDecorator,
  hasItem,
  ...props
}) {
  const isOnButton = React.useRef(false);
  const internalOpen = React.useRef(open);

  return (
    <Dropdown
      open={open}
      onOpenChange={(_, isOpen) => {
        if (isOpen) {
          onOpen();
        } else {
          onLeaveMenu(() => isOnButton.current);
        }
      }}
    >
      <MenuButton
        {...props}
        onMouseEnter={() => {
          onOpen();
          isOnButton.current = true;
        }}
        onMouseLeave={() => {
          isOnButton.current = false;
        }}
        // onClick={() => {
        //   if (!internalOpen.current) {
        //     onOpen();
        //   }
        // }}
        variant="plain"
        color="neutral"
        size="sm"
        startDecorator={startDecorator}
        endDecorator={endDecorator}
      >
        {label}
      </MenuButton>
      {hasItem &&
        React.cloneElement(menu, {
          onMouseLeave: () => {
            onLeaveMenu(() => isOnButton.current);
          },
          slotProps: {
            listbox: {
              "aria-label": label,
            },
          },
        })}
    </Dropdown>
  );
}

NavMenuButton.propTypes = {
  label: PropTypes.string.isRequired,
  menu: PropTypes.element.isRequired,
  onLeaveMenu: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [menuIndex, setMenuIndex] = useState(null);
  const handleOpen = (index) => () => setMenuIndex(index);
  const handleClose = () => setMenuIndex(null);
  const createHandleLeaveMenu = (index) => (getIsOnButton) => {
    setTimeout(() => {
      const isOnButton = getIsOnButton();
      if (!isOnButton) {
        setMenuIndex((latestIndex) =>
          index === latestIndex ? null : latestIndex
        );
      }
    }, 200);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", m: ".5em 3em" }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: { xs: "none", lg: "flex" },
        }}
      >
        <IconButton
          size="md"
          variant="plain"
          color="neutral"
          onClick={() => {
            navigate("/");
          }}
          sx={{ display: { xs: "none", lg: "inline-flex" }}}
        >
          
          <Typography
            level="title-sm"
            sx={{ color: "neutral" }}
            letterSpacing={1}
            fontWeight={"md"}
            startDecorator={<Box
              component={"img"}
              alt="Logo"
              src="./assets/img/istidafa-logo.svg"
              sx={{ height: "28px", width: "28px" }}
            />}
          >
            ISTIDAFA.
          </Typography>
        </IconButton>

        {PagesData.map((page, index) => {
          const isOpen = menuIndex === index;
          const hasItems = page.items && page.items.length > 0;

          return (
            <NavMenuButton
              key={index}
              onClick={() => {
                navigate(page.path);
              }}
              label={page.title}
              open={isOpen}
              onOpen={handleOpen(index)}
              onLeaveMenu={createHandleLeaveMenu(index)}
              startDecorator={<page.icon />}
              endDecorator={
                hasItems &&
                (isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)
              }
              hasItem={hasItems}
              menu={
                <Menu
                  onClose={handleClose}
                  sx={{
                    p: 1,
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    variant="plain"
                    level="body-sm"
                    fontWeight="md"
                    sx={{
                      color: "neutral.plainDisabledColor",
                    }}
                  >
                    {page.title}
                  </Typography>
                  {page.items &&
                    page.items.map((item, itemIndex) => (
                      <MenuItem
                        key={itemIndex}
                        onClick={() => {
                          navigate(item.path);
                        }}
                        sx={{
                          border: "none",
                          borderRadius: "sm",
                          transition: "background-color 0.3s, color 0.3s",
                          "&:focus-visible": {
                            outline: "none",
                            borderColor: "transparent",
                          },
                          "&:hover": {
                            bgcolor: "neutral.plainHoverColor",
                            "& svg": {
                              color: "neutral.plainHoverBg",
                            },
                            "& .icon-container": {
                              bgcolor: "neutral.plainHoverColor",
                            },
                            "& .text-container": {
                              color: "text.primary",
                            },
                            "& .description": {
                              color: "neutral.plainHoverColor",
                            },
                          },
                        }}
                      >
                        {item.icon && (
                          <Box
                            className="icon-container"
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "40px",
                              height: "40px",
                              border: `1px solid ${theme.palette.background.level2}`,
                              borderRadius: "sm",
                              bgcolor: "background.level1",
                              transition: "background-color 0.3s, color 0.3s",
                            }}
                          >
                            <item.icon sx={{ color: "neutral" }} />
                          </Box>
                        )}

                        <Box display={"flex"} flexDirection={"column"}>
                          <Typography
                            level="body-sm"
                            fontWeight="md"
                            variant="plain"
                            color="neutral"
                            className="text-container"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="plain"
                            level="body-sm"
                            className="description"
                            sx={{ color: "neutral.plainDisabledColor" }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </MenuItem>
                    ))}
                </Menu>
              }
            />
          );
        })}
      </Stack>
      <Box sx={{ display: { xs: "inline-flex", lg: "none" } }}>
        <IconButton
          variant="plain"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <MenuRoundedIcon />
        </IconButton>
        <Drawer
          sx={{
            display: { xs: "inline-flex", lg: "none" },
          }}
          open={open}
          onClose={() => setOpen(false)}
          anchor="left"
        >
          <ModalClose />
          <DialogTitle sx={{ letterSpacing: 1 }}>ISTIDAFA.</DialogTitle>

          <Box sx={{ px: 1 }}>
            <Navigation />
          </Box>
        </Drawer>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          alignItems: "center",
        }}
      >
        <Input
          size="sm"
          variant="outlined"
          placeholder="Search anything…"
          startDecorator={<SearchRoundedIcon color="primary" />}
          endDecorator={
            <IconButton
              variant="outlined"
              color="neutral"
              sx={{ bgcolor: "background.level1" }}
            >
              <Typography level="title-sm" textColor="text.icon">
                ⌘ K
              </Typography>
            </IconButton>
          }
        />
        <Tooltip title="Contact us" variant="outlined">
          <IconButton
            size="sm"
            variant="outlined"
            color="neutral"
            onClick={() => navigate("/contact")}
            sx={{ alignSelf: "center" }}
          >
            <HelpRoundedIcon />
          </IconButton>
        </Tooltip>
        <ColorSchemeToggle />
        <Dropdown>
          <Tooltip title="Client Area" variant="outlined">
            <MenuButton
              size="sm"
              variant="outlined"
              color="neutral"
              component="a"
              sx={{
                padding: 0.86,
                ":hover": {
                  svg: {
                    color: "neutral.lightChannel",
                  },
                },
              }}
            >
              <PersonAddAltSharpIcon />
            </MenuButton>
          </Tooltip>
          <Menu
            placement="bottom-end"
            size="sm"
            sx={{
              zIndex: "99999",
              p: 1,
              gap: 1,
              "--ListItem-radius": "var(--joy-radius-sm)",
            }}
          >
            <MenuItem onClick={() => navigate("/login")}>
              <LoginSharpIcon />
              Log in
            </MenuItem>
            <ListDivider />
            <MenuItem onClick={() => navigate("/signup")}>
              <PersonAddAltSharpIcon />
              Sign up
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
    </Box>
  );
}
