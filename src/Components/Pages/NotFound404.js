import React from "react";
import { Grid, Divider, Typography, Button } from "@material-ui/core";
import "./Pages.css";
import UnknownIcon from "@material-ui/icons/HelpOutline";
import ScrollToTop from "../ScrollToTop";

function NotFound404() {
  return (
    <div>
      <ScrollToTop />
      <div style={{ height: "15vh" }} />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <UnknownIcon fontSize="large"/>
        </Grid>
          <div style={{ height: "5px" }} />
        <Grid item>
          <Typography variant="h2">Page Not Found</Typography>
        </Grid>
          <div style={{ height: "5px" }} />
        <Grid item>
          <Typography variant="subtitle2" style={{ textAlign: "center" }}>
            The link you clicked/entered may be broken
            <br /> or the page may have been removed
          </Typography>
        </Grid>
          <div style={{ height: "55px" }} />
        <Grid item>
          <Button variant="outlined" color="primary" href="#/">
            Return to Home
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default NotFound404;
