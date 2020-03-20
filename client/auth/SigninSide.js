import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import CssBaseline from 'material-ui/CssBaseline';
import TextField from 'material-ui/TextField';
import FormControlLabel from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import Box from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import LockOutlinedIcon from 'material-ui-icons/Album';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles'

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'gray',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    margin: 2,
  },
});

class SigninSide extends Component {
    state = {}

    render(){
        const {classes} = this.props
        return (
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
              
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    />
                    <TextField
       
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />

                    <Button
                    type="submit"
                    fullWidth
                    color="primary"
                    className={classes.submit}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item xs>

                    </Grid>
                    <Grid item>

                    </Grid>
                    </Grid>
                    <Box>
                    </Box>
                </form>
                </div>
            </Grid>

          </Grid>
        );
    }
}

export default withStyles(styles)(SigninSide)