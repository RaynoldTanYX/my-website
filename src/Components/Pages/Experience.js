import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Card, CardContent, CardActionArea } from "@material-ui/core";
//icons for projects
import YearIcon from "@material-ui/icons/EventAvailable";
//icons for education
import QualificationIcon from "@material-ui/icons/Assignment";
//icons for contact
//constants
import { workData } from "../../Constants";
import ScrollToTop from "../ScrollToTop";

function Experience() {
  const RenderDescription = (descArray) => {
    let desc = [];
    for (let i = 0; i < descArray.length; i++) {
      desc.push(descArray[i]);
      desc.push(<br key={i} />);
    }
    return desc;
  };

  const RenderWork = () => {
    let work = [];
    for (let i = 0; i < workData.length; i++) {
      work.push(
        <Grid item xs={12} key={i}>
          <Card elevation={1}>
            <CardActionArea
              onClick={() => window.open(workData[i].link, "_blank")}
            >
              <CardContent>
                <Grid container spacing={2} alignItems="flex-start">
                  {/* <Grid item xs={2} md={1}>
                        <CardMedia
                          component="img"
                          className={classes.workcardmedia}
                          src={workData[i].image}
                          title={workData[i].company}
                        />
                      </Grid> */}
                  <Grid item xs={10} md={11}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {workData[i].company}
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
                          {workData[i].role}
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
                          {workData[i].duration}
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
                  {RenderDescription(workData[i].description)}
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
        {work}
      </Grid>
    );
  };

  return (
    <div>
      <ScrollToTop />
      <div style={{ height: "25px" }} />
      {RenderWork()}
      <div style={{ height: "100px" }} />
    </div>
  );
}

export default Experience;
