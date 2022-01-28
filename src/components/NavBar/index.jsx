import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../services';

const ResponsiveAppBar = ({ pages }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container disableGutters>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map(({ name, route }) => (
              <Button key={name} onClick={() => navigate(`/${route}`)} sx={{ color: 'white' }}>
                {name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="logOut">
              <Button onClick={() => logOut()} sx={{ color: 'white' }}>
                logOut
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

ResponsiveAppBar.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, route: PropTypes.string }))
    .isRequired
};
export default ResponsiveAppBar;
