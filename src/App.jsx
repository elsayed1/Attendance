import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import { Home, Login, WorkingHours } from './pages';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const theme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <UserAuthContextProvider>
          <Routes>
            <Route path="Login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="working-hours"
              element={
                <ProtectedRoute>
                  <WorkingHours />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
