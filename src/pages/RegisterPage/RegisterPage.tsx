import React, { useState } from "react";
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


function isEmail(email:string):boolean{
  const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
  return regex.test(email)
}

export const RegisterPage = () => {

  const [firstname,setfirstname] = useState<string>('')
  const [lastname,setlastname] = useState<string>('')
  const [email,setemail] = useState<string>('')
  const [password1,setpassword1] = useState<string>('')
  const [password2,setpassword2] = useState<string>('')

  const [registeriserror,setregisteriserror] = useState<boolean>(false)
  const [successRegister,setSuccessRegister] = useState<boolean>(false)



function register():any{

  if(firstname && lastname && email && password1 && password2 && password1 == password2){
    setregisteriserror(false)
    setSuccessRegister(true)

  }else{
    setregisteriserror(true)
    setSuccessRegister(false)
  }
} 

return (
  <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Card sx={{padding: 2, width: 300}}>
      <CardContent className={styles.RegisterCard}>
        <h2>Register</h2>
        <FormControl className={styles.input}>
          <InputLabel htmlFor="username">First name</InputLabel>
          <Input id="firstname" margin="dense" onChange={(e)=>{setfirstname(e.target.value)}}/>
        </FormControl>
        { registeriserror && firstname.length==0 ? 'Veuillez remplir ce champs': '' }

        <FormControl className={styles.input}>
          <InputLabel htmlFor="username">Last name</InputLabel>
          <Input id="lastname" margin="dense"  onChange={(e)=>{setlastname(e.target.value)}} />
        </FormControl>
        { registeriserror && lastname.length==0 ? 'Veuillez remplir ce champs': '' }

        <FormControl className={styles.input}>
          <InputLabel htmlFor="username">E-mail</InputLabel>
          <Input id="email" type="email" margin="dense"  onChange={(e)=>{setemail(e.target.value)}}/>
          {registeriserror && email.length > 0 && !isEmail(email) ? 'Ceci n\'est pas un mail' : ''}
          
        </FormControl>
        
        <FormControl className={styles.input}>
          <InputLabel htmlFor="password">Choose a password</InputLabel>
          <Input id="password" type="password" margin="dense" onChange={(e)=>{setpassword1(e.target.value)}}/>
        </FormControl>
        <FormControl className={styles.input}>
          <InputLabel htmlFor="confirm-password">Retype your password</InputLabel>
          <Input id="confirm-password" type="password" margin="dense" onChange={(e)=>{setpassword2(e.target.value)}} />
        </FormControl>

        {registeriserror && password1 !== password2 ? 'Mot de passe différents' : ''}
        
        <FormControl className={styles.input}>
          <Button className={styles.button} variant="contained" onClick={register}>
            Register
          </Button>
          {successRegister && 'Votre compte est bien enregistré !'}
        </FormControl>
      </CardContent>
    </Card>
  </Container>
)};