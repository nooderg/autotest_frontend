import React, { FC } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { Button } from '@mui/material';


interface LoginProps {
  username:string;
  password: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}

function login(username: string, password: string): User|undefined {
  console.log(username, password);
  const accounts: Array<User> = getAccounts();

  if (!accounts) {
    throw new Error('No accounts found');
  }

  const user: User|undefined = findUser(accounts, username);

  if (!user) {
    throw new Error('User not found');
  }

  if(!verifyPassword(user, password)) {
    throw new Error('Wrong password');
  }

  return user;
}

function getAccounts(): Array<User> {
  console.log(window.location.host+'/mock/account-mock.json');
  const xhr = new XMLHttpRequest();
  xhr.open('GET','http://'+window.location.host+'/mock/account-mock.json', false);
  xhr.send();
  const response = xhr.responseText;
  const accounts: Array<User> = JSON.parse(response);
  console.log(accounts);
  return accounts;
}

function findUser(accounts: Array<User>, username: string): User|undefined {
  return accounts.find((user: User) => user.username === username);
}

function verifyPassword(user: User, password: string): boolean {
  return user.password === password;
}

const Login: FC<LoginProps> = ({username, password}) => (
<Button
  variant="contained"
  onClick={() => {
    try {
      const user: User|undefined = login(username, password);
      if (user) {
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  }}
>
  Login
</Button>
);

export default Login;
