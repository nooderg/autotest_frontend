import styles from "./Login.module.css";
import React, { FC, useContext, useEffect, useState } from "react";
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
import { ILoginForm, IResponseForm } from "../../types/formTypes";
import UserService from "../../services/userService";
import { LoginButton } from "..";
import { isEmail } from "../../helper/formValidation";

export const Login: FC = () => {
  const userService = new UserService();

  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const [loginResponse, setLoginResponse] = useState<IResponseForm>({
    open: false,
    error: false,
    message: "",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (loginResponse.open) {
      setOpen(true);
    }
  }, [loginResponse]);

  return (
    <div>
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
        {loginForm.email.length > 0 && !isEmail(loginForm.email) && (
          <span>This is not an email</span>
        )}
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
        <LoginButton form={loginForm} setResponse={setLoginResponse} />
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
        <Alert
          sx={{ width: "100%" }}
          severity={loginResponse?.error ? "error" : "success"}
        >
          {loginResponse && loginResponse.message}
        </Alert>
      </Snackbar>
    </div>
  );
};
