import React from "react";
import styles from "./RegisterPage.module.css";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";

const RegisterPage = () => (
  <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Card sx={{padding: 2, width: 300}}>
      <CardContent className={styles.RegisterCard}>
        <h2>Register</h2>
        <FormControl className={styles.input}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" margin="dense" />
        </FormControl>
        <FormControl className={styles.input}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type="password" margin="dense" />
        </FormControl>
        <FormControl className={styles.input}>
          <InputLabel htmlFor="confirm-password">Password</InputLabel>
          <Input id="confirm-password" type="password" margin="dense" />
        </FormControl>
        <FormControl className={styles.input}>
          <Button className={styles.button} variant="contained">
            Register
          </Button>
        </FormControl>
      </CardContent>
    </Card>
  </Container>
);

export default RegisterPage;
