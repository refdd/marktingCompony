import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import logo from "../public/assets/logo (2).png";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        padding: "20px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Image
        src={logo}
        width={300}
        height={120}
        alt="logo "
        className="object-cover"
        loading="eager"
      />

      <List>
        {" "}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {" "}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Business Consultant" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {" "}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="HR Consultant" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {" "}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Business Consultant" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {" "}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Accountant / Tax Consultant" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>Marketing Consultant</List>
      <List>HR Consultant</List>
      <List>Accountant / Tax Consultant</List>
      <List>Management Consultant</List>
      <List>International Consultant</List>
      <List>Services</List>
    </Box>
  );

  return (
    <div className="md:hidden">
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <CiMenuBurger className="text-3xl text-gray-950" />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
