import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Card, CardContent, CardActionArea } from "@material-ui/core";
import YearIcon from "@material-ui/icons/EventAvailable";
//icons for education
import QualificationIcon from "@material-ui/icons/Assignment";
//constants
import { educationData } from "../../Constants";
import ScrollToTop from "../ScrollToTop";

function Education() {
  const RenderDescription = (descArray) => {
    let desc = [];
    for (let i = 0; i < descArray.length; i++) {
      desc.push(descArray[i]);
      desc.push(<br key={i} />);
    }
    return desc;
  };

  const RenderEducation = () => {
    let education = [];
    for (let i = 0; i < educationData.length; i++) {
      education.push(
        <Grid item xs={12} key={i}>
          <Card elevation={1}>
            <CardActionArea
              onClick={() => window.open(educationData[i].link, "_blank")}
            >
              <CardContent>
                <Grid container spacing={2} alignItems="flex-start">
                  {/* <Grid item xs={2} md={1}>
                        <CardMedia
                          component="img"
                          className={classes.educardmedia}
                          src={educationData[i].image}
                          title={educationData[i].institute}
                        />
                      </Grid> */}
                  <Grid item xs={10} md={11}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {educationData[i].institute}
                    </Typography>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      wrap="nowrap"
                      spacing={1}
                    >
                      <Grid item>
                        <QualificationIcon color="primary" fontSize="small" />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                          align="left"
                        >
                          {educationData[i].qualification}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      wrap="nowrap"
                      spacing={1}
                    >
                      <Grid item>
                        <YearIcon color="primary" fontSize="small" />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                          align="left"
                        >
                          {educationData[i].duration}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <br />
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  align="left"
                >
                  {RenderDescription(educationData[i].description)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    }

    return (
      <Grid
        style={{ marginLeft: "auto", marginRight: "auto" }}
        container
        item
        xs={11}
        sm={9}
        md={7}
        xl={5}
        spacing={3}
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        {education}
      </Grid>
    );
  };

  return (
    <div>
      <ScrollToTop />
      <div style={{ height: "25px" }} />
      {RenderEducation()}
      <div style={{ height: "100px" }} />
    </div>
  );
}

export default Education;
