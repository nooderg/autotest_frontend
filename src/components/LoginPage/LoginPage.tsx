import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import Login from "../Login/Login";

function LoginPage() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
  <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Card sx={{padding: 2, width: 300}}>
      <CardContent className={styles.LoginCard}>
        <h2>Register</h2>
        <FormControl className={styles.input}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" margin="dense" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl className={styles.input}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type="password" margin="dense"  value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <FormControl className={styles.input}>
          <Login
          username={username}
          password={password}
          />
        </FormControl>
      </CardContent>
    </Card>
  </Container>
  );

}

export default LoginPage;
