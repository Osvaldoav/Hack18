import React, { Component } from 'react';
import ProgresoPedido from './ProgresoPedido';
import UsuarioPedido from './UsuarioPedido';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DetallesPedido from './DetallesPedido';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: '65px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expansion: {
        // borderRadius: '15px',
        marginBottom: '18px',
        marginTop: '18px',
    }
});

function Pedidos(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <ExpansionPanel className={classes.expansion}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}> #435 </Typography> <DetallesPedido/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ProgresoPedido/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansion}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}> #544 </Typography> <DetallesPedido/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ProgresoPedido/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansion}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}> #123 </Typography> <DetallesPedido/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ProgresoPedido/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansion}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}> #233 </Typography> <DetallesPedido/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ProgresoPedido/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.expansion}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}> #143 </Typography> <DetallesPedido/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ProgresoPedido/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
  
  Pedidos.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Pedidos);