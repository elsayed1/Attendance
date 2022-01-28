import React from 'react';
import { Navigate } from 'react-router-dom';
import { styled } from '@mui/styles';

import { useUserAuth } from '../context/UserAuthContext';
import NavBar from './NavBar';
import { navBarPages } from '../constants';

const AppWrapper = styled('div')({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  // backgroundImage: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',

  minHeight: '100vh'
});

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <AppWrapper>
      <NavBar pages={navBarPages} />
      {children}
    </AppWrapper>
  );
};

export default ProtectedRoute;
