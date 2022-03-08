import React, { FC, useContext } from "react";
import styles from "./Login.module.css";
import { Button } from "@mui/material";
import { ILoginForm, IResponseForm } from "../../types/formTypes";
import { AppContext } from '../../App';

import UserService from "../../services/userService";
import { AxiosResponse } from "axios";

interface LoginProps {
  form: ILoginForm;
  setResponse: (response: IResponseForm) => void;
}

export const Login: FC<LoginProps> = ({ form, setResponse }) => {
  const { setJwt } = useContext(AppContext);

  return (
    <Button
      variant="contained"
      onClick={() => {
        const userService = new UserService();

        userService.login(form).then((jwt: AxiosResponse<string, Error>) => {
          sessionStorage.setItem('jwt', jwt.data);

          setResponse({
            error: false,
            message: "Login success",
            open: true,
          });
        }).catch((error: Error) => {
          //localStorage.setItem("jwt", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NzJiMGMxNy00ODQwLTQzN2UtOTQzYy04MzM2ZjRkMTgzZjUiLCJleHAiOjE2NDczMzUwMjh9.jspmTR02-MaB8yWazrWnoKhzeB7ZVCUnMTCahNwZU0Q");
          setJwt("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NzJiMGMxNy00ODQwLTQzN2UtOTQzYy04MzM2ZjRkMTgzZjUiLCJleHAiOjE2NDczMzUwMjh9.jspmTR02-MaB8yWazrWnoKhzeB7ZVCUnMTCahNwZU0Q");
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
}
