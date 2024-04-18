import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IoIosLogIn, IoIosLogOut, IoIosSettings } from "react-icons/io";
import { MdOutlineQuestionAnswer } from "react-icons/md";
export default async function Sidebar(
  toggled: boolean,
  toggleDrawer: Function
) {
  const menuBar = [
    { name: "Log In", link: "/api/auth/login", icon: <IoIosLogIn /> },
    { name: "Log Out", link: "/api/auth/logout", icon: <IoIosLogOut /> },
    { name: "Settings", link: "/settings", icon: <IoIosSettings /> },
    { name: "Contact Us", link: "/contact", icon: <MdOutlineQuestionAnswer /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuBar.map((plz) => (
          <Link href={plz.link}>
            <ListItem key={plz.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{plz.icon}</ListItemIcon>
                <ListItemText primary={plz.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={toggled} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
