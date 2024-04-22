"use client";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { IoIosLogIn, IoIosLogOut, IoIosSettings } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { useState } from "react";
export function Sidebar() {
  const menuBar = [
    // {loggedIn ? { name: "Log In", link: "/api/auth/login", icon: <IoIosLogIn /> } || { name: "Log Out", link: "/api/auth/logout", icon: <IoIosLogOut /> }},
    { name: "Settings", link: "/settings", icon: <IoIosSettings /> },
    { name: "Contact Us", link: "/contact", icon: <MdOutlineQuestionAnswer /> },
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);
  function toggleSidebarcollapse() {
    setIsCollapsed((prev) => !prev);
  }
  var log = false;
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleSidebarcollapse}
    >
      <List>
        <a href="/api/auth/logout" className="text-decoration-none">
          <ListItem key="Log Out" disablePadding>
            <ListItemButton>
              <ListItemIcon>{<IoIosLogOut />}</ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>
        </a>
        {menuBar.map((plz) => (
          <a href={plz.link} className="text-decoration-none">
            <ListItem key={plz.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{plz.icon}</ListItemIcon>
                <ListItemText primary={plz.name} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="flex md:hidden">
      <Button onClick={toggleSidebarcollapse}>
        <IoIosMenu color="white" size={30} />
      </Button>
      <Drawer open={isCollapsed} onClose={toggleSidebarcollapse} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}

export function SidebarLoggedIn() {
  const menuBar = [
    // {loggedIn ? { name: "Log In", link: "/api/auth/login", icon: <IoIosLogIn /> } || { name: "Log Out", link: "/api/auth/logout", icon: <IoIosLogOut /> }},
    { name: "Settings", link: "/settings", icon: <IoIosSettings /> },
    { name: "Contact Us", link: "/contact", icon: <MdOutlineQuestionAnswer /> },
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);
  function toggleSidebarcollapse() {
    setIsCollapsed((prev) => !prev);
  }
  var log = false;
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleSidebarcollapse}
    >
      <List>
        <a href="/api/auth/login" className="text-decoration-none">
          <ListItem key="Log In" disablePadding>
            <ListItemButton>
              <ListItemIcon>{<IoIosLogIn />}</ListItemIcon>
              <ListItemText primary="Log In" />
            </ListItemButton>
          </ListItem>
        </a>
        {menuBar.map((plz) => (
          <a href={plz.link} className="text-decoration-none">
            <ListItem key={plz.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{plz.icon}</ListItemIcon>
                <ListItemText primary={plz.name} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="flex md:hidden">
      <Button onClick={toggleSidebarcollapse}>
        <IoIosMenu color="white" size={30} />
      </Button>
      <Drawer open={isCollapsed} onClose={toggleSidebarcollapse} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
