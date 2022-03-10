import styles from "./Login.module.css";
import React, { FC, useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";

import { ILoginForm, IResponseForm } from "../../types/formTypes";
import { AlertSnackBar, LoginButton } from "..";
import { isEmail } from "../../helper/formValidation";

export const Login: FC = () => {

  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const [loginResponse, setLoginResponse] = useState<IResponseForm>({
    open: false,
    error: false,
    message: "",
  });

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
      
      <AlertSnackBar response={loginResponse} />
    </div>
  );
};
