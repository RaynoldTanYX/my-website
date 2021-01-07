import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
//icons for projects
import YearIcon from "@material-ui/icons/EventAvailable";
import LanguageIcon from "@material-ui/icons/Code";
import ToolIcon from "@material-ui/icons/Build";
import PlatformIcon from "@material-ui/icons/Devices";
//constants
import { projectData } from "../../Constants";
import ScrollToTop from "../ScrollToTop";
const useStyles = makeStyles({
  projcardmediacontainer: {
    paddingTop: "56.25%", //to maintain 16:9 aspect ratio
    position: "relative",
    overflow: "hidden",
  },
  projcardmedia: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
});

function Portfolio() {
  const classes = useStyles();

  const RenderDescription = (descArray) => {
    let desc = [];
    for (let i = 0; i < descArray.length; i++) {
      desc.push(descArray[i]);
      desc.push(<br key={i}/>);
    }
    return desc;
  };

  const RenderProjects = () => {
    let projects = [];
    for (let i = 0; i < projectData.length; i++) {
      projects.push(
        <Grid item xs={12} sm={9} md={6} lg={4} key={i}>
          <Card elevation={1}>
            <CardActionArea
              onClick={() => window.open(projectData[i].link, "_blank")}
            >
              <Grid container className={classes.projcardmediacontainer}>
                <CardMedia
                  component="iframe"
                  className={classes.projcardmedia}
                  src={projectData[i].video}
                  title={projectData[i].title}
                />
              </Grid>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {projectData[i].title}
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
                    <YearIcon color="primary" fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                      align="left"
                    >
                      {projectData[i].year}
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
                    <LanguageIcon color="primary" fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                      align="left"
                    >
                      {projectData[i].language}
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
                    <ToolIcon color="primary" fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                      align="left"
                    >
                      {projectData[i].tools}
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
                    <PlatformIcon color="primary" fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                      align="left"
                    >
                      {projectData[i].platform}
                    </Typography>
                  </Grid>
                </Grid>
                <br />
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  align="left"
                >
                  {RenderDescription(projectData[i].description)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    }
    return (
      <Grid container item xs={12} justify="center" alignItems="stretch">
        <Grid container item xs={11} spacing={3} direction="row" justify="center" alignItems="stretch">
          {projects}
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <ScrollToTop/>
      <div style={{ height: "25px" }} />
      {RenderProjects()}
    </div>
  );
}

export default Portfolio;
