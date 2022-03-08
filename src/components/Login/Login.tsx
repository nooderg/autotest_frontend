import React, { FC } from "react";
import styles from "./Login.module.css";
import { Button } from "@mui/material";
import { ILoginForm, IResponseForm } from "../../types/formTypes";

import UserService from "../../services/userService";
import { AxiosResponse } from "axios";

interface LoginProps {
  form: ILoginForm;
  setResponse: (response: IResponseForm) => void;
}

export const Login: FC<LoginProps> = ({ form, setResponse }) => (
  <Button
    variant="contained"
    onClick={() => {
      const userService = new UserService();

      userService.login(form).then((jwt: AxiosResponse<string, Error>) => {

        console.log(jwt.data);
        sessionStorage.setItem('jwt', jwt.data);

        setResponse({
          error: false,
          message: "Login success",
          open: true,
        });
      }).catch((error: Error) => {
        setResponse({
          error: true,
          message: error.message,
          open: true,
        });
      });
    }}
  >
    Login
  </Button>
);
