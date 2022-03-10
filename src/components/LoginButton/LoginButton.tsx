import React, { FC, useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { AxiosResponse } from 'axios';

import { ILoginForm, IResponseForm } from '../../types/formTypes';
import { AppContext } from '../../App';
import UserService from '../../services/userService';
import { isEmail } from '../../helper/formValidation';

interface LoginButtonProps {
  form: ILoginForm;
  setResponse: (response: IResponseForm) => void;
}

export const LoginButton: FC<LoginButtonProps> = ({ form, setResponse }) => {
  const { setJwt } = useContext(AppContext);

  const [formIsCompleted, setFormisComplete] = useState(false);

  const isCompleted = (form: ILoginForm): boolean => {
    return !(form.email !== '' && form.password !== '' && isEmail(form.email));
  };

  useEffect(() => {
    setFormisComplete(isCompleted(form));
  }, [form]);

  return (
    <Button
      variant="contained"
      disabled={formIsCompleted}
      onClick={() => {
        const userService = new UserService();

        userService
          .login(form)
          .then((jwt: AxiosResponse<string, Error>) => {
            setJwt(jwt.data);

            setResponse({
              error: false,
              message: 'Login success',
              open: true,
            });
          })
          .catch(() => {
            setResponse({
              error: true,
              message: 'unknown user or password, please try again',
              open: true,
            });
          });
      }}
    >
      Login
    </Button>
  );
};
