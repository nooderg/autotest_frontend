import React, { FC, useEffect, useState } from 'react';
import styles from './RegisterButton.module.css';
import { IRegisterForm } from "../../types/formTypes";
import { Button } from '@mui/material';
import { isEmail } from '../../helper/formValidation';


interface RegisterButtonProps {
  form: IRegisterForm;
  setResponse: (response: boolean) => void;
}

const RegisterButton: FC<RegisterButtonProps> = ({ form, setResponse }) => {
  
  const [registeriserror, setregisteriserror] = useState<boolean>(false);
  const [successRegister, setSuccessRegister] = useState<boolean>(false);

  function register(): any {
    if (
      isCompleted(form)
    ) {
      setSuccessRegister(true);
    } else {
      setSuccessRegister(false);
    }
  }

  const isCompleted = (form:IRegisterForm):boolean => {
    return !(form.firstName !== "" && form.lastName  !== "" && form.email !== "" && isEmail(form.email) && form.password !== "" && form.confirmPassword !== "" && form.password == form.confirmPassword)
  }

  useEffect(()=>{
    console.log(isCompleted(form))
    setregisteriserror(isCompleted(form))
  },[form])

  
  
  
  
  
  return (
  <Button
    className={styles.button}
    variant="contained"
    onClick={register}
    disabled={registeriserror ?? false}
  >
    Register
  </Button>

)};

export default RegisterButton;
