import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

const pages = [
  {name: 'Home', path: '/'},
  {name: 'login', path: '/login'},
  {name: 'register', path: '/register'},
];

const Appbar = () => {
  return (
    <AppBar position="static" sx={{marginBottom: 2}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {pages.map((page) => (
                <Link style={{color: "#fff", marginLeft: 8}} to={page.path} key={page.name}>{page.name}</Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;
