/**
 * @file App.js
 * Exports main application file.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import writeGood from 'write-good';
import { indigo } from 'material-ui/colors';
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  withStyles,
  Chip,
  Grid
} from 'material-ui';

import './App.css';

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
      report: PropTypes.string,
      chip: PropTypes.string
    }).isRequired
  };

  state = {
    report: [],
    selectedIssue: null
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
    const { selectedIssue } = this.state;
    return this.state.report.map((item, index) => (
      <Chip
        className={chip}
        label={item.reason}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        style={{
          backgroundColor: selectedIssue === index ? indigo[500] : null,
          color: selectedIssue === index ? 'white' : null
        }}
        onClick={() => this.selectIssue(index)}
      />
    ));
  }

  /**
   * Selects and highlights an issue.
   *
   * @param {int} selectedIssue - Number referring to the index of the item
   *                              that should be selected.
   */
  selectIssue(selectedIssue) {
    this.setState({ selectedIssue });

    // Highlight the text in the textarea.
    const textarea = document.getElementById('app-form-input');
    const report = this.state.report[selectedIssue] || false;
    if (report && textarea) {
      textarea.setSelectionRange(report.index, report.index + report.offset);
      textarea.focus();
    }
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
                id="app-form-input"
                label="Insert Text Here"
                style={{
                  '::selection': {
                    backgroundColor: indigo[500],
                    color: 'white'
                  }
                }}
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
