import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Restaurant from '@material-ui/icons/Restaurant';
import AppBar from '@material-ui/core/AppBar';
import RestaurantMenu from '@material-ui/icons/RestaurantMenu';
import CheckBox from '@material-ui/icons/CheckBox';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Fastfood from '@material-ui/icons/Fastfood';
import Pedidos from './Pedidos';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 700,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class LeftPanel extends React.Component {
  state = {
    mobileOpen: false,
    cafeteria: 'Centrales'
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  changeCafe = (cafe) => {
    this.setState(state => ({ cafeteria: cafe }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {this.state.cafeteria}
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem button onClick={() => this.changeCafe('Centrales')}>
                    <ListItemIcon>
                        <Fastfood />
                    </ListItemIcon>
                    <ListItemText primary="Centrales" />
                    </ListItem>
                    <ListItem button onClick={() => this.changeCafe('Jubileo')}>
                    <ListItemIcon>
                        <Restaurant />
                    </ListItemIcon>
                    <ListItemText primary="Jubileo" />
                    </ListItem>
                    <ListItem button button onClick={() => this.changeCafe('Tentenpie Jardin Carreras')}>
                    <ListItemIcon>
                        <RestaurantMenu />
                    </ListItemIcon>
                    <ListItemText primary="Tentenpie Jardin Carreras" />
                    </ListItem>
                    <ListItem button onClick={() => this.changeCafe('Tentenpie CIAP')}>
                    <ListItemIcon>
                        <RestaurantMenu />
                    </ListItemIcon>
                    <ListItemText primary="Tentenpie CIAP" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                    <ListItemIcon>
                        <CheckBox />
                    </ListItemIcon>
                    <ListItemText primary="Tuppers pendientes" />
                    </ListItem>
                </List>
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Pedidos cafeteria={this.state.cafeteria}/>
        </main>
      </div>
    );
  }
}

LeftPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LeftPanel);