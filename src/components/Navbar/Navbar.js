import React from 'react';
import { Link } from 'react-router-dom'; 
import { Toolbar, Button, AppBar, Avatar, Typography } from '@material-ui/core'; 
import memories from '../../images/memories.png';

import useStyles from './styles'; 

import { GoogleOAuthProvider } from '@react-oauth/google';

const Navbar = () => {
    const classes = useStyles(); 

    const user = null; 

  return (
    <GoogleOAuthProvider clientId="229457060348-tt8e68ur24f7auge4cmdm84q24h9gbi0.apps.googleusercontent.com">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    </GoogleOAuthProvider>
  )
}

export default Navbar