import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

  class DetallesPedido extends React.Component {

    state = {
        detalle: ' - Chilaquiles Media +Aguacate - Coca cola'
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center">
                <Grid item>
                <Tooltip classes={{ tooltip: classes.customWidth }} title={this.state.detalle} placement="bottom">
                    <Button> Detalles del pedido </Button>
                </Tooltip>
                </Grid>
            </Grid>
        );
    }
}

const styles = theme => ({
    customWidth: {
      maxWidth: 140,
      fontSize: 12
    },
  });
  
  DetallesPedido.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(DetallesPedido);