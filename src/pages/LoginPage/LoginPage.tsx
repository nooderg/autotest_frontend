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

import { Login, ILoginResponse } from "../../components";
import Api from "../../helper/api";
import { ILoginForm } from "../../types/formTypes";

const isEmail = (email: string): boolean => {
  const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  return regex.test(email);
}

export function LoginPage() {
  const api = new Api();

  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const [loginResponse, setLoginResponse] = useState<ILoginResponse>({
    open: false,
    error: false,
    message: "",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
      if (loginResponse.open) {
        setOpen(true);

        if (!loginResponse.error) {
          api.login(loginForm).then((response: any) => {
            console.log(response);
          });
        }
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
            <InputLabel htmlFor="username">Email</InputLabel>
            <Input
              id="email"
              margin="dense"
              value={loginForm.email}
              onChange={(e) => {
                setLoginForm({ ...loginForm, email: e.target.value });
              }}
            />
            {loginForm && loginForm.email && !isEmail(loginForm.email) && <>
              <span className="error">Is not mail</span>
            </>}
          </FormControl>
          <FormControl className={styles.input}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              margin="dense"
              value={loginForm.password}
              onChange={(e) => {
                setLoginForm({ ...loginForm, password: e.target.value });
              }}
            />
          </FormControl>
          <FormControl className={styles.input}>
            <Login
              form={loginForm}
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