import React, { FC, useEffect, useState } from "react";
import styles from "./Register.module.css";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Input,
  InputLabel,
  Snackbar,
} from "@mui/material";
import Api from "../../helper/api";
import { IRegisterForm, IResponseForm } from "../../types/formTypes";
import RegisterButton from "../RegisterButton/RegisterButton";
import { isEmail } from "../../helper/formValidation";

export const Register = () => {

  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerResponse, setRegisterResponse] = useState<IResponseForm>({
    open: false,
    error: false,
    message: "",
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (registerResponse.open) {
      setOpen(true);
    }
  }, [registerResponse]);

  return (
    <div className={styles.Register}>
      <FormControl className={styles.input}>
        <InputLabel htmlFor="username">First name</InputLabel>
        <Input
          id="firstname"
          margin="dense"
          onChange={(e) => {
            setRegisterForm({ ...registerForm, firstName: e.target.value });
          }}
        />
      </FormControl>
      {registerForm.firstName.length == 0 && <span>Please fill in this field</span>}

      <FormControl className={styles.input}>
        <InputLabel htmlFor="username">Last name</InputLabel>
        <Input
          id="lastname"
          margin="dense"
          onChange={(e) => {
            setRegisterForm({ ...registerForm, lastName: e.target.value });
          }}
        />
      </FormControl>
      {registerForm.firstName.length == 0 && <span>Please fill in this field</span>}

      <FormControl className={styles.input}>
        <InputLabel htmlFor="username">E-mail</InputLabel>
        <Input
          id="email"
          type="email"
          margin="dense"
          onChange={(e) => {
            setRegisterForm({ ...registerForm, email: e.target.value });
          }}
        />
        {registerForm.email.length > 0 && !isEmail(registerForm.email) && (
          <span>This is not an email</span>
        )}
      </FormControl>

      <FormControl className={styles.input}>
        <InputLabel htmlFor="password">Choose a password</InputLabel>
        <Input
          id="password"
          type="password"
          margin="dense"
          onChange={(e) => {
            setRegisterForm({ ...registerForm, password: e.target.value });
          }}
        />
      </FormControl>
      <FormControl className={styles.input}>
        <InputLabel htmlFor="confirm-password">Retype your password</InputLabel>
        <Input
          id="confirm-password"
          type="password"
          margin="dense"
          onChange={(e) => {
            setRegisterForm({
              ...registerForm,
              confirmPassword: e.target.value,
            });
          }}
        />
      </FormControl>

      {registerForm.password !== registerForm.confirmPassword
        ? "Mot de passe différents"
        : ""}

      <FormControl className={styles.input}>
        <RegisterButton form={registerForm} setResponse={setRegisterResponse} />
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
          severity={registerResponse?.error ? "error" : "success"}
        >
          {registerResponse && registerResponse.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
