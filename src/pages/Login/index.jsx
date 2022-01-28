import React, { useEffect } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUserAuth } from '../../context/UserAuthContext';
import { signInWithGoogle } from '../../services/auth';
import GoogleIcon from '../../components/GoogleIcon';

const Login = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  const signIn = async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      toast.error('authentication failed');
    }
  };
  return (
    <Box
      style={{ minHeight: '100vh' }}
      component={Grid}
      container
      justifyContent="center"
      alignItems="center">
      <Paper component={Box} p={3}>
        <Grid container justifyContent="center" direction="column" spacing={3} alignItems="center">
          <Grid item>
            <Typography variant="h5">You Can SignUp With Google</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={signIn} startIcon={<GoogleIcon />}>
              Sign in with Google
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
