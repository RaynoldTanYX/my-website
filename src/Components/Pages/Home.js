import React from "react";
import { Grid, Divider, Typography, Button } from "@material-ui/core";
import "./Pages.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@material-ui/lab";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import UnknownIcon from "@material-ui/icons/HelpOutline";
import MedicIcon from "@material-ui/icons/LocalHospital";
import ScrollToTop from "../ScrollToTop";

function Home() {
  const RenderTimeline = () => {
    return (
      <Timeline align="left">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h5">Nanyang Polytechnic</Typography>
            <Typography variant="subtitle2">
              Diploma in Digital Entertainment Technology (Games)
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography color="textSecondary">Apr 2013 - May 2016</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Jun 2016 - Oct 2016</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">Infinito Games</Typography>
            <Typography variant="subtitle2">
              Full-time Game Developer
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Oct 2016 - Jul 2018</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <MedicIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">Singapore Armed Forces (NS)</Typography>
            <Typography variant="subtitle2">
              Medical Response Force, Combat Medic
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h5">
              Nanyang Technological University
            </Typography>
            <Typography variant="subtitle2">
              Bachelor of Engineering in Computer Science
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography color="textSecondary">
              Aug 2018 - Dec 2021 (Expected)
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Aug 2019 - Jan 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">
              Nanyang Technological University
            </Typography>
            <Typography variant="subtitle2">
              Student Assistant - Data Science and Artificial Intelligence
              Research Centre
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">May 2020 - Aug 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">Global eTrade Services Pte Ltd</Typography>
            <Typography variant="subtitle2">
              Fullstack Software Engineering Intern
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Future</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <UnknownIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">???</Typography>
            {/* <Typography variant="subtitle2">
                    Diploma in Digital Entertainment Technology (Games)
                  </Typography> */}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  };

  return (
    <div>
      <ScrollToTop />
      <div style={{ height: "15vh" }} />
      <Grid container item xs={12} justify="center" alignItems="center">
        <Grid
          container
          item
          xs={11}
          md={6}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography variant="subtitle1">Hi, my name is</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2">
              <b>RAYNOLD</b> TAN
            </Typography>
          </Grid>
          <div style={{ height: "10px" }} />
          <Grid item>
            <Typography variant="subtitle1">
              Software engineer based in Singapore. <br />
              Final year Computer Science undergraduate at Nanyang Technological
              University, Singapore.
            </Typography>
          </Grid>
          <div style={{ height: "20px" }} />
          <Grid item>
            <Button variant="contained" color="secondary" href="#/contact">
              Get In Touch
            </Button>
          </Grid>

          <Grid item></Grid>
        </Grid>
      </Grid>
      <div style={{ height: "100px" }} />
      <Divider
        style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
      />
      <div style={{ height: "100px" }} />
      {RenderTimeline()}
      <Grid container justify="space-evenly">
        <Grid item>
          <Button variant="outlined" color="primary" href="#/education">
            View Education
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" href="#/experience">
            View Experience
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
