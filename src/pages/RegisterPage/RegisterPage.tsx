import React, { useState } from "react";
import styles from "./RegisterPage.module.css";

import {
  Card,
  CardContent,
  Container,
} from "@mui/material";

import Api from "../../helper/api";
import { IRegisterForm } from "../../types/formTypes";
import {Register} from "../../components";

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
          <Register />
        </CardContent>
      </Card>
    </Container>
  );
};
