import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { ProfilIconMenu } from '../.';
import LogoutIcon from '@mui/icons-material/Logout';

import styles from './Appbar.module.css';

export const Appbar = () => {
  const { jwt } = useContext(AppContext);

  const pages = [{ name: 'HOME', path: '/' }];

  if (jwt === '') {
    pages.push({ name: 'REGISTER', path: '/register' });
  } else {
    pages.push({ name: 'APP', path: '/app' });
  }

  return (
    <AppBar position="static" sx={{ marginBottom: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Typography variant="h6" noWrap component="div">
                AUTOTEST
              </Typography>

              <Box sx={{ flexGrow: 1, display: 'flex', gap: '10px' }}>
                {pages.map((page) => (
                  <Link className={styles.link} to={page.path} key={page.name}>
                    {page.name}
                  </Link>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex' }}>
              {jwt ? (
                <ProfilIconMenu
                  popoverContent={
                    <Link className={styles.linkProfil} to="/logout">
                      <LogoutIcon />
                      <Typography>Logout</Typography>
                    </Link>
                  }
                />
              ) : (
                <Link className={styles.link} to={'/login'}>
                  LOGIN
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
