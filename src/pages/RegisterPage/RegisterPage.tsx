import React, { useState } from "react";
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

import Api from "../../helper/api";
import { IRegisterForm } from "../../types/formTypes";

function isEmail(email: string): boolean {
  const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  return regex.test(email);
}

export const RegisterPage = () => {
  const api = new Api();

  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );

  const [registeriserror, setregisteriserror] = useState<boolean>(false);
  const [successRegister, setSuccessRegister] = useState<boolean>(false);

  function register(): any {
    if (
      registerForm.firstName &&
      registerForm.lastName &&
      registerForm.email &&
      registerForm.password &&
      registerForm.confirmPassword &&
      registerForm.password == registerForm.confirmPassword
    ) {
      setregisteriserror(false);
      setSuccessRegister(true);
    } else {
      setregisteriserror(true);
      setSuccessRegister(false);
    }
  }

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card sx={{ padding: 2, width: 300 }}>
        <CardContent className={styles.RegisterCard}>
          <h2>Register</h2>
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
          {registeriserror && registerForm.firstName.length == 0
            ? "Veuillez remplir ce champs"
            : ""}

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
          {registeriserror && registerForm.lastName.length == 0
            ? "Veuillez remplir ce champs"
            : ""}

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
            {registeriserror && registerForm.email.length > 0 && !isEmail(registerForm.email)
              ? "Ceci n'est pas un mail"
              : ""}
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
            <InputLabel htmlFor="confirm-password">
              Retype your password
            </InputLabel>
            <Input
              id="confirm-password"
              type="password"
              margin="dense"
              onChange={(e) => {
                setRegisterForm({ ...registerForm, confirmPassword: e.target.value });
              }}
            />
          </FormControl>

          {registeriserror && registerForm.password !== registerForm.confirmPassword
            ? "Mot de passe différents"
            : ""}

          <FormControl className={styles.input}>
            <Button
              className={styles.button}
              variant="contained"
              onClick={register}
            >
              Register
            </Button>
            {successRegister && "Votre compte est bien enregistré !"}
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  );
};
