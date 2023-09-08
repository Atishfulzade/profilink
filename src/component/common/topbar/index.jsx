import React from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { Badge } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ForumIcon from "@mui/icons-material/Forum";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
export default function Topbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const myRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="navbar_main">
      <div className="main_nav_left">
        <img src="/profilink.png" alt="" />
        <div className="search">
          <input type="text" placeholder="Search here..." />
          <SearchIcon />
        </div>
      </div>
      <div className="main_nav_right">
        <Tooltip title="Home">
          <IconButton onClick={() => {
                myRoute("/home");
              }}>
            <HomeIcon
              />
          </IconButton>
        </Tooltip>


        <Tooltip title="People">
          <IconButton onClick={() => {
                myRoute("/connection");
              }}>
            <PeopleIcon
              />
          </IconButton>
        </Tooltip>


        <Tooltip title="Jobs">
        <IconButton onClick={() => {
              myRoute("/job");
            }}>
          <BusinessCenterIcon
            />
            </IconButton>
          </Tooltip>


        <Tooltip title="Chat">
          <Badge badgeContent={8} color="primary">
          <IconButton onClick={() => {
                myRoute("/chat");
              }}>
            <ForumIcon
              color="action"
              />
          </IconButton>
          </Badge>
          </Tooltip>


          <Tooltip title="Notification">
            <Badge badgeContent={4} color="primary">
          <IconButton onClick={() => {
                myRoute("/notification");
              }}>
            <NotificationsIcon
              color="action"
              
            />
          </IconButton>
        </Badge>
        </Tooltip>
        <div className="user">
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src="user.jpg"
                  alt="user"
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
            <MenuItem onClick={handleClose}>
              <Avatar src="user.jpg" /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar src="user.jpg" /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
