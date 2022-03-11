import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Stepper,
  Step,
  StepLabel,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";

import { teamList } from "./teamList";

import styles from "./LandingPage.module.css";
import web_hosting from "./web_hosting.svg";
import analytics from "./analytics.svg";
import linkedin from "../../assets/linkedin.png";
import payment_completed from "./payment_completed.svg";
import { Link } from "react-router-dom";

const steps = [
  "Accounts",
  "Tavern file generation",
  "CLI",
  "Managed && automated testing instances",
  "Statistics & API benchmark",
];

export const LandingPage = () => (
  <Box className={styles.LandingPage}>
    <Container className={styles.ContainerFullscreen}>
      <Grid container spacing={2} className={styles.GridFlex}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" style={{ marginBottom: 20 }}>
            🔎 What&apos;s autotest ?
          </Typography>
          <Typography variant="body1" style={{ marginBottom: 20 }}>
          Automate your tests! Today it is difficult to test the implementation of your API routes, Autotest meets this need and allows you to transform your OpenAPI files into a tavern file.
          </Typography>
        </Grid>
        <Grid item md={6} className={styles.ImageContainer}>
          <img src={web_hosting} alt="web_hosting" className={styles.Image} />
        </Grid>
      </Grid>
    </Container>

    <Container className={styles.ContainerFullscreen}>
      <Grid container spacing={2} className={styles.GridFlex}>
        <Grid item xs={12} md={6} className={styles.ImageContainer}>
          <img src={analytics} alt="web_hosting" className={styles.Image} />
        </Grid>

        <Grid item md={6}>
          <Typography variant="h3" style={{ marginBottom: 20 }}>
            🏃‍♂️ Ok so how to use it ?
          </Typography>
          <Typography variant="body1" style={{ marginBottom: 20 }}>
            First, you need to create an account. Then, simply annotate your
            code with Swagger to generate an .openfile file, send it to us, and
            you are done!
          </Typography>
          <Button variant="outlined">
            <Link to="/app" className={styles.Link}>
              Generate my fill
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Container>

    <Container className={styles.ContainerFullscreen}>
      <Grid container spacing={2} className={styles.GridFlex}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" style={{ marginBottom: 20 }}>
            💸 And for what price?
          </Typography>
          <Typography variant="body1" style={{ marginBottom: 20 }}>
            We did not decide ourselves on pricing yet. We&apos;d like to have a
            free tier so you can try the product and decide if you want to adopt
            us!
          </Typography>
        </Grid>
        <Grid item md={6} className={styles.ImageContainer}>
          <img
            src={payment_completed}
            alt="web_hosting"
            className={styles.Image}
          />
        </Grid>
      </Grid>
    </Container>

    <Container>
      <Typography
        variant="h3"
        style={{ marginBottom: 20, textAlign: "center" }}
      >
        Roadmap
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: 40, textAlign: "center" }}
      >
        Autotest is still under development. We are still making features :
      </Typography>
      <Box sx={{ marginBottom: 10, width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>

    <Container>
      <Typography
        variant="h3"
        style={{ marginBottom: 40, textAlign: "center" }}
      >
        Our Team
      </Typography>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {teamList.map((member, key) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={key}
            style={{ width: "200px", margin: "10px" }}
          >
            <CardMedia
              component="img"
              height="65%"
              image={member.img}
              alt={member.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ height: "40px", fontWeight: "600", fontSize: "16px" }}
              >
                {member.name}
              </Typography>
              <Box style={{ display: "flex", height: "20%" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ display: "flex", justifyContent: "spaceBetween" }}
                >
                  {member.job}
                </Typography>
                <CardActions style={{ display: "flex", justifyContent: "end" }}>
                  <a href={member.linkedin}>
                    <img src={linkedin} style={{ width: "20px" }}></img>
                  </a>
                </CardActions>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  </Box>
);
