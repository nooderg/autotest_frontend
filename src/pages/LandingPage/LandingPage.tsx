import { Button } from "@mui/material";
import React from "react";
import styles from "./LandingPage.module.css";
import web_hosting from "./web_hosting.svg";

export const LandingPage = () => (
  <div className={styles.LandingPage}>
    <div
      className="hero"
      style={{
        display: "flex",
        height: "90vh",
        alignItems: "center",
        maxWidth: "1000px",
        width: "90vw",
        margin: "auto",
      }}
    >
      <div className="text" style={{ flex: 1, paddingRight: "100px" }}>
        <h1>Open API to test</h1>
        Lorem ipsum dolor sit amet, . Modi expedita, at non maiores quos
        consequuntur, sint corrupti vero libero atque consequatur, quasi esse.
        Necessitatibus debitis cupiditate maxime, temporibus in asperiores!
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <Button variant="contained">Start a free trial </Button>
          <Button variant="outlined">View demo</Button>
        </div>
      </div>
      <div className="image" style={{ flex: 1 }}>
        <img src={web_hosting} alt="web_hosting" />
      </div>
    </div>
    <div
      style={{
        backgroundColor: "#7986CB",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "50px 0px",
      }}
    >
      <div
        className="routes"
        style={{
          display: "flex",
          alignItems: "center",
          width: "1000px",
          margin: "auto",
        }}
      >
        <div className="text" style={{ flex: 1 }}>
          <h2>Test your routes easily</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            quaerat aut rerum voluptatum nisi atque possimus odio sint
            laudantium laboriosam tempore, iusto quia voluptatibus debitis eius
            minima tenetur doloremque dolorem.
          </p>
        </div>

        <div className="image" style={{ flex: 1 }}>
          <img src={web_hosting} alt="web_hosting" />
        </div>
      </div>
    </div>
  </div>
);
