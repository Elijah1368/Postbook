import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import CssBaseline from 'material-ui/CssBaseline';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Grid from 'material-ui/Grid';
import LockOutlinedIcon from 'material-ui-icons/LinkedCamera';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles'
import auth from './../auth/auth-helper'
import { signin } from './api-auth.js'
import {Redirect} from 'react-router-dom'
import Icon from 'material-ui/Icon'

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10vh',
    marginLeft: '2vw',
    marginRight: '2vw'
  },
  avatar: {
    margin: 1,
  },
  form: {
    width: '100%'
  },
  submit: {
    marginTop: '5vh',
    fontSize: '2vh',
  },
  title: {
    fontSize: '15vh',
    fontFamily: 'Impact'
  },
  error: {
    verticalAlign: 'middle'
  },
});

class SigninSide extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  }

  clickSubmit = () => {
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }

    signin(user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error })
      } else {
        auth.authenticate(data, () => {
          this.setState({ redirectToReferrer: true })
        })
      }
    })
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }


  render() {
    const {classes} = this.props
    const { from } = {
      from: {
        pathname: '/'
      }
    }
    const { redirectToReferrer } = this.state
    if (redirectToReferrer) {
      return (<Redirect to={from} />)
    }
    return (
      <Card>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />

          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <CardContent className={classes.paper}>
              <Typography component="h1" className={classes.title}>
                Postbook
            </Typography>
              <div className={classes.form}>
                <TextField
				          onChange={this.handleChange('email')}
				          type="email"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                /><br />
                <TextField
				  onChange={this.handleChange('password')}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <br /> {
                  this.state.error && (<Typography component="p" color="error">
                    <Icon color="error" className={classes.error}>error</Icon>
                    {this.state.error}
                  </Typography>)}

                <CardActions>
                  <Button
                    type="submit"
                    fullWidth
                    color="primary"
                    className={classes.submit}
                    onClick={this.clickSubmit}
                  >
                    LET'S GO
                </Button>
                </CardActions>

                <Grid container>
                  <Grid item xs>

                  </Grid>
                  <Grid item>

                  </Grid>
                </Grid>
              </div>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(SigninSide)