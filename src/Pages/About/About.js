import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Foto from "./Foto/Foto";

export default function AboutUs() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography
          component="div"
          style={{
            backgroundColor: "#E7CDD0",
            height: "47rem",
            marginTop: "7rem",
            marginBottom: "3rem",
            borderRadius: "20px",
          }}
        >
          <Foto />
        </Typography>
      </Container>
    </React.Fragment>
  );
}
