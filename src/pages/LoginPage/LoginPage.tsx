import React, { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import {
  Alert,
  Card,
  CardContent,
  Container,
  FormControl,
  Input,
  InputLabel,
  Snackbar,
} from "@mui/material";

import { Login, LoginResponse } from "../../components";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginResponse, setLoginResponse] = useState<LoginResponse>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (loginResponse) {
      setOpen(true);
    }
  }, [loginResponse]);

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card sx={{ padding: 2, width: 300 }}>
        <CardContent className={styles.LoginCard}>
          <h2>Login</h2>
          <FormControl className={styles.input}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              margin="dense"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl className={styles.input}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl className={styles.input}>
            <Login
              username={username}
              password={password}
              setLoginResponse={setLoginResponse}
            />
          </FormControl>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          autoHideDuration={2000}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Alert sx={{width: "100%"}} severity={loginResponse?.error ? "error" : "success"}>
            {loginResponse && loginResponse.message}
          </Alert>
        </Snackbar>
        </CardContent>
      </Card>
    </Container>
  );
}