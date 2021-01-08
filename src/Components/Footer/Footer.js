import React from "react";
import {Divider, Typography} from "@material-ui/core";

function Footer() {
  return (
    <div>
      <Divider
        style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
      />
      <div style={{ height: "30px" }} />
      <Typography variant="subtitle2" style={{color: "#D8DEE9", textAlign: "center"}}>
          Designed & Built by Raynold Tan
      </Typography>
      <div style={{ height: "30px" }} />
    </div>
  );
}

export default Footer;
