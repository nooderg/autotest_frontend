import React from 'react';
import { Card, CardContent, Container } from '@mui/material';

import { Register } from '../../components';

import styles from './RegisterPage.module.css';

export const RegisterPage = () => (
  <Container
    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <Card sx={{ padding: 2, width: 300 }}>
      <CardContent className={styles.RegisterCard}>
        <h2>Register</h2>
        <Register />
      </CardContent>
    </Card>
  </Container>
);
