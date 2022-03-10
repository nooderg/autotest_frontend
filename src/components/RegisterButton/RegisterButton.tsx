import React, { FC, useEffect, useState } from "react";
import styles from "./RegisterButton.module.css";
import { IRegisterForm, IResponseForm } from "../../types/formTypes";
import { Button } from "@mui/material";
import { isEmail } from "../../helper/formValidation";
import { AxiosResponse } from "axios";
import UserService from "../../services/userService";
import { IUser } from "../../types/userTypes";

interface RegisterButtonProps {
  form: IRegisterForm;
  setResponse: (response: IResponseForm) => void;
}

const RegisterButton: FC<RegisterButtonProps> = ({ form, setResponse }) => {
  const [registeriserror, setregisteriserror] = useState<boolean>(false);

  const isCompleted = (form: IRegisterForm): boolean => {
    return !(
      form.firstName !== "" &&
      form.lastName !== "" &&
      form.email !== "" &&
      isEmail(form.email) &&
      form.password !== "" &&
      form.confirmPassword !== "" &&
      form.password == form.confirmPassword
    );
  };

  useEffect(() => {
    console.log(isCompleted(form));
    setregisteriserror(isCompleted(form));
  }, [form]);

  return (
    <Button
      className={styles.button}
      variant="contained"
      onClick={() => {
        const userService = new UserService();

        userService
          .register({
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            password: form.password,
          })
          .then((result: AxiosResponse<IUser, Error>) => {
            setResponse({
              error: false,
              message: "Login success",
              open: true,
            });
          })
          .catch((error: Error) => {
            setResponse({
              error: true,
              message: error.message,
              open: true,
            });
          });
      }}
      disabled={registeriserror ?? false}
    >
      Register
    </Button>
  );
};

export default RegisterButton;
