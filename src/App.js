/**
 * @file App.js
 * Exports main application file.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import writeGood from 'write-good';
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  withStyles,
  Chip,
  Grid
} from 'material-ui';

const styles = theme => ({
  main: {
    marginTop: 90
  },
  button: {
    marginTop: theme.spacing.unit
  },
  report: {
    marginTop: theme.spacing.unit * 4
  },
  chip: {
    marginTop: theme.spacing.unit
  },
  wrapper: {
    width: '80%',
    margin: '0 auto'
  }
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      main: PropTypes.string,
      button: PropTypes.string,
      wrapper: PropTypes.string,
      report: PropTypes.string
    }).isRequired
  };

  state = {
    report: []
  };

  /**
   * Handles changes to the main textarea.
   */
  handleChange(event) {
    this.setState({ report: writeGood(event.target.value) });
  }

  /**
   * Returns jsx for report.
   */
  fetchReport() {
    const { classes: { chip } } = this.props;
    return this.state.report.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Chip label={item.reason} key={index} className={chip} />
    ));
  }

  /**
   * {@inheretdoc}
   */
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <AppBar color="primary" aria-label="Menu">
          <Toolbar>
            <Typography type="title" color="inherit">
              Write Goodly
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container id="app-body" className={classes.main}>
          <Grid item xs={12} sm={6}>
            <form id="app-form">
              <TextField
                multiline
                fullWidth
                id="App-form-input"
                label="Insert Text Here"
                onChange={event => this.handleChange(event)}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6} id="app-report" className={classes.report}>
            {this.fetchReport()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
