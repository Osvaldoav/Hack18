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
import Tuppers from './Tuppers'

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
});

export default class MainPanel extends React.Component {
  render() {
    return (
      <div>
        { this.props.cafeteria == 'Tuppers' ? <Tuppers /> : <UsuarioPedido /> }
      </div>
    );
  }
}