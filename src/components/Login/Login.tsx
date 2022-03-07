import React, { FC } from "react";
import styles from "./Login.module.css";
import { Button } from "@mui/material";
import { ILoginForm } from "../../types/formTypes";

export interface ILoginResponse {
  open: boolean;
  error: boolean;
  message: string;
}

interface LoginProps {
  form: ILoginForm;
  setLoginResponse: (loginResponse: ILoginResponse) => void;
}

const isEmail = (email: string): boolean => {
  const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  return regex.test(email);
}

function login(form: ILoginForm): void {
  //TODO: search account in database
  if (form.email !== "test") {
     throw new Error('No accounts found');
  }

  if(isEmail(form.email)){
    throw new Error('Is not email');
  }
  //TODO: check password in database
  if (form.password !== "test") {
    throw new Error('Incorrect password');
  }
  //TODO: store jwt in localstorage
}

export const Login: FC<LoginProps> = ({ form, setLoginResponse }) => (
  <Button
    variant="contained"
    onClick={() => {
      try {
        login(form);
        setLoginResponse({
          error: false,
          message: "Login success",
          open: true,
        });
      } catch (error: any) {
        console.log(error);
        setLoginResponse({
          error: true,
          message: error.message,
          open: true,
        });
      }
    }}
  >
    Login
  </Button>
);
