import React, { FC, useState } from "react";
import styles from "./Register.module.css";
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
import RegisterButton from "../RegisterButton/RegisterButton";


function isEmail(email: string): boolean {
  const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  return regex.test(email);
}

export const Register = () => {
  const api = new Api();

  const [registerResponse,setRegisterResponse] = useState<boolean>(false)
  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      {registerForm.firstName.length == 0
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
      {registerForm.lastName.length == 0
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
        {
        registerForm.email.length > 0 &&
        !isEmail(registerForm.email)
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

        <RegisterButton form={registerForm}  setResponse={setRegisterResponse} />
        {registerResponse && "Votre compte est bien enregistré !"}
      </FormControl>
    </div>
  );
};

export default Register;
