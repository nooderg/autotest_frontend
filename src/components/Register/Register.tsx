import React, { useState } from "react";
import styles from "./Register.module.css";
import {
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import { IRegisterForm, IResponseForm } from "../../types/formTypes";
import { isEmail } from "../../helper/formValidation";
import { RegisterButton, AlertSnackBar } from "..";

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

      <AlertSnackBar response={registerResponse}/>
    </div>
  );
};
