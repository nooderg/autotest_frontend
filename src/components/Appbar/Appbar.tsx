import React, { FC, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const linkStyle = {color: "#fff", marginLeft: 8, textDecoration:'none',fontWeight:'600'}

export const Appbar = () => {
  const { jwt } = useContext(AppContext);

  const pages = [
    {name: 'HOME', path: '/'},
    {name: 'APP', path: '/app'},
  ];

  if (jwt === "") {
    pages.push({name: 'REGISTER', path: '/register'});
  }

  return (
    <AppBar position="static" sx={{marginBottom: 2}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Box style={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center'}} >
            <Box sx={{display: 'flex', alignItems:'center',gap:'10px'}}>
              <Typography
                variant="h6"
                noWrap
                component="div"
              >
                AUTOTEST
              </Typography>

              <Box sx={{ flexGrow: 1, display: 'flex', gap:'10px' }}>
                {pages.map((page) => (
                    <Link style={linkStyle} to={page.path} key={page.name}>{page.name}</Link>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex' }}>
              {jwt ?
                (
                  <Link style={linkStyle} to={'/logout'}>LOGOUT</Link>
                ) : (
                  <Link style={linkStyle} to={'/login'}>LOGIN</Link>
                )
              }
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};