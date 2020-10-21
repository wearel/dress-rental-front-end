import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Foto from "./Foto/Foto";

export default function AboutUs() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Paper
          component="div"
          style={{
            backgroundColor: "#E7CDD0",
            height: "40rem",
            marginTop: "7rem",
            marginBottom: "3rem",
            borderRadius: "20px",
          }}
        >
          <Foto />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
