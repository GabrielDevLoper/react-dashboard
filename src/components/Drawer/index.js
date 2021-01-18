import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import { useDrawer } from "../../context/DrawerOpenContext";
import { Drawer, List } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Divider from "@material-ui/core/Divider";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

import history from "../../history";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const path = [
  {
    id: 1,
    nome: "Categorias",
    url: "/Categorias",
  },
  {
    id: 2,
    nome: "Usuarios",
    url: "/usuarios",
  },
  {
    id: 3,
    nome: "Locais",
    url: "/usuarios",
  },
  {
    id: 4,
    nome: "Bairros",
    url: "/usuarios",
  },
];

export default function SideBar() {
  const classes = useStyles();
  const theme = useTheme();
  const { open, handleDrawer } = useDrawer();

  const [expand, setExpand] = React.useState(false);

  const handleClickExpand = () => {
    setExpand(!expand);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawer}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {/* Nested List Start*/}
        <ListItem button onClick={handleClickExpand}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Auxiliares" />
          {expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {path.map((path, index) => (
              <ListItem
                button
                onClick={() => history.push(`${path.url}`)}
                key={path.id}
                className={classes.nested}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={path.nome} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        {/* Nested List End*/}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
