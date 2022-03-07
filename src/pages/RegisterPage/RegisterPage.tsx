import React, { useState, useEffect } from "react";
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

 const isEmail = (email: string): boolean => {
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
      isEmail(registerForm.email) &&
      registerForm.password &&
      registerForm.confirmPassword &&
      registerForm.password == registerForm.confirmPassword
    ) {
      console.log(registerForm)
      setregisteriserror(false);
      setSuccessRegister(true);


      // TO DO : Send the object to api




    } else {    
      setregisteriserror(true);
      setSuccessRegister(false);
      throw new Error('Form is not completed');
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
              && <>
              <span className="error">Is not a mail !</span></>}
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
            ? `<span class="error">"Mot de passe différents</span>`
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

