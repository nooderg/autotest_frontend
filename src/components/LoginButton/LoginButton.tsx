import React, { FC, useContext, useEffect, useState } from "react";
import styles from './LoginButton.module.css';
import { Button, formGroupClasses } from "@mui/material";
import { ILoginForm, IResponseForm } from "../../types/formTypes";
import { AppContext } from '../../App';

import UserService from "../../services/userService";
import { AxiosResponse } from "axios";
import { isEmail } from "../../helper/formValidation";

interface LoginButtonProps {
  form: ILoginForm;
  setResponse: (response: IResponseForm) => void;
}

export const LoginButton: FC<LoginButtonProps> = ({ form, setResponse }) => {
  const { setJwt } = useContext(AppContext);

  const [formIsCompleted,setFormisComplete] = useState(false)

  const isCompleted = (form:ILoginForm):boolean => {
    return !(form.email !== "" && form.password !== "" && isEmail(form.email))
  }


  useEffect(()=>{
    setFormisComplete(isCompleted(form))
  },[form])

  return (
    <Button
      variant="contained"
      disabled={formIsCompleted}
      onClick={() => {
        const userService = new UserService();

        userService.login(form).then((jwt: AxiosResponse<string, Error>) => {
          setJwt(jwt.data);

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
  )
}

