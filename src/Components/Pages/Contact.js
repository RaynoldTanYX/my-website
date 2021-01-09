import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Card, CardContent, CardActionArea } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import MailIcon from "@material-ui/icons/Mail";
import ContactForm from "./ContactForm";
import LaunchIcon from "@material-ui/icons/Launch";
import { contactData } from "../../Constants";
import ScrollToTop from "../ScrollToTop";

function Contact() {
  const RenderContactForm = () => {
    return (
      <Grid item>
        <Card elevation={1}>
          {/* <CardActionArea> */}
          <CardContent>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              wrap="nowrap"
              spacing={1}
            >
              <Grid item>
                <SvgIcon
                  color="primary"
                  fontSize="large"
                  component={MailIcon}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" component="p" align="left">
                  {<ContactForm />}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          {/* </CardActionArea> */}
        </Card>
      </Grid>
    );
  };

  const RenderContactObjects = () => {
    let contacts = [];
    contactData.forEach((item) => {
      contacts.push(
        <Grid item>
          <Card elevation={1}>
            <CardActionArea onClick={() => window.open(item.link, "_blank")}>
              <CardContent>
                <div style={{ height: "10px" }} />
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  wrap="nowrap"
                  spacing={1}
                >
                  <Grid item>
                    <SvgIcon
                      color="primary"
                      fontSize="large"
                      component={item.icon}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                      align="left"
                    >
                      {item.text}{" "}
                      <SvgIcon
                        color="secondary"
                        fontSize="small"
                        component={LaunchIcon}
                      />
                    </Typography>
                  </Grid>
                </Grid>
                <div style={{ height: "10px" }} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    });
    return contacts;
  };
  return (
    <div>
      <ScrollToTop />
      <div style={{ height: "25px" }} />
      <Grid
        item
        container
        xs={12}
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item 
          xs={11}
          sm={9}
          md={7}
          lg={5}
          xl={3}
          >
          {RenderContactForm()}
        </Grid>
        <Grid
          item
          container
          xs={11}
          sm={9}
          md={4}
          lg={3}
          xl={2}
          spacing={3}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          {RenderContactObjects()}
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
