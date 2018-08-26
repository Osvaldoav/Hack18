import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
});

class SingleUsertupper extends Component {
  render() {
    const { classes } = this.props;    
    return (
      <div className='single-tupper'>
        <div className='containerr'>
            <div className='matricula'> <Typography className={classes.heading}> {this.props.matricula} </Typography>  </div>
            <div className='dias'> <Typography className={classes.heading}> {this.props.dias} </Typography> </div>
            <div className='boton'>
                <Button variant="outlined" color="primary">
                    Reminder
                </Button> 
            </div>
        </div>
      </div>
    );
  }
}

SingleUsertupper.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SingleUsertupper);