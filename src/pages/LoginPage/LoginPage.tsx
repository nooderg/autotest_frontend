import React, { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import {
  Alert,
  Card,
  CardContent,
  Container,
  FormControl,
  Input,
  InputLabel,
  Snackbar,
} from "@mui/material";
import { Login } from "../../components";


export function LoginPage() {


  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card sx={{ padding: 2, width: 300 }}>
        <CardContent className={styles.LoginCard}>
          <h2>Login</h2>
          <Login />
        </CardContent>
      </Card>
    </Container>
  );
}
