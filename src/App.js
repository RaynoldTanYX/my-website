import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid, Typography, Paper, makeStyles, Link } from "@material-ui/core";
import { Button, IconButton } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TabPanel from "./TabPanel";
import { sizing } from '@material-ui/system';

//colors
import { teal, pink } from "@material-ui/core/colors";

//icons for tabs
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ProjectIcon from "@material-ui/icons/Code";
import ContactIcon from "@material-ui/icons/ContactMail";
//icons for projects
import YearIcon from '@material-ui/icons/EventAvailable';
import LanguageIcon from "@material-ui/icons/Code";
import ToolIcon from '@material-ui/icons/Build';
import PlatformIcon from '@material-ui/icons/Devices';
//icons for education
import QualificationIcon from '@material-ui/icons/Assignment';
//constants
import { projectData, educationData, workData } from './Constants';

const useStyles = makeStyles({
  root: {
    //backgroundColor: '#FFF',
    //minHeight: '100vh',
    width: "100vw",
  },
  headerimage: {
    height: "15vh",
    padding: 10,
    //width: '200px'
  },
  tabspaper: {
    //width: "100%",
    backgroundColor: '#1c1f25',
    justify: 'center',
  },
  contentpaper: {
    //width: '100%',
    minHeight: "70vh",
    justify: 'center',
    backgroundColor: '#1c1f25',
  },
  projcard: {
    //maxWidth: 345,
    backgroundColor: '#1c1f25',
  },
  projcardmediacontainer: {
    paddingTop: "56.25%", //to maintain 16:9 aspect ratio
    position:"relative",
    overflow:"hidden",
  },
  projcardmedia: {
    position:"absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
  educardmedia: {
    width: "100px",
    //height: 100,
    //backgroundColor: 'white',
  },
});

function App() {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: teal,
      secondary: pink,
    },
  });

  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };


  const RenderHeader = () => {
    return (
      <img src={require('./images/header.png')} className={classes.headerimage} alt='Logo'/>
    );
  };

  const RenderTabs = () => {
    return (
      <Grid container direction="column" xs={12}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          centered
          //variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab label="Projects" icon={<ProjectIcon />} aria-label="Projects" />
          <Tab label="Education" icon={<SchoolIcon />} aria-label="Education" />
          <Tab label="Work" icon={<WorkIcon />} aria-label="Work" />
          <Tab label="Contact" icon={<ContactIcon />} aria-label="Contact" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          {RenderTab_Projects()}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {RenderTab_Education()}
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          {RenderTab_Work()}
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          {RenderTab_Contact()}
        </TabPanel>
      </Grid>
    );
  };

  const RenderDescription = (descArray) => {
    let desc = [];
    for (let i = 0; i < descArray.length; i++)
    {
      desc.push(descArray[i]);
      desc.push(<br/>);
    }
    return (desc);
  };
  
  const RenderTab_Projects = () => {
    let projects = [];
    for (let i = 0; i < projectData.length; i++) {
      projects.push(
        <Grid item xs={12} md={6} xl={3}>
          <Card className={classes.projcard} elevation={3}>
            <CardActionArea onClick={()=>window.open(projectData[i].link,"_blank")}>
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
                
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={1}>
                  <Grid item>
                    <YearIcon color="primary" fontSize='small'/>
                  </Grid>
                  <Grid item>
                  <Typography variant="body1" color="textSecondary" component="p" align="left">
                    {projectData[i].year}
                  </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={1}>
                  <Grid item>
                    <LanguageIcon color="primary" fontSize='small'/>
                  </Grid>
                  <Grid item>
                  <Typography variant="body1" color="textSecondary" component="p" align="left">
                    {projectData[i].language}
                  </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={1}>
                  <Grid item>
                    <ToolIcon color="primary" fontSize='small'/>
                  </Grid>
                  <Grid item>
                  <Typography variant="body1" color="textSecondary" component="p" align="left">
                    {projectData[i].tools}
                  </Typography>
                  </Grid>
                </Grid>

                <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={1}>
                  <Grid item>
                    <PlatformIcon color="primary" fontSize='small'/>
                  </Grid>
                  <Grid item>
                  <Typography variant="body1" color="textSecondary" component="p" align="left">
                    {projectData[i].platform}
                  </Typography>
                  </Grid>
                </Grid>
                <br/>
                <Typography variant="body1" color="textSecondary" component="p" align="left">
                  {RenderDescription(projectData[i].description)}
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    }
    return (
      <Paper className={classes.contentpaper} elevation={0}>
        <Grid container spacing={3} direction='row' justify='center'>
          {projects}
        </Grid>
      </Paper>

    );
  };

  const RenderTab_Education = () => {
    let education = [];
    for (let i = 0; i < educationData.length; i++) {
      education.push(
        <Grid item xs={12}>
          <Card className={classes.projcard} elevation={3}>
            <CardActionArea onClick={()=>window.open(educationData[i].link,"_blank")}>
              <CardContent>

                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <CardMedia
                      component="img"
                      className={classes.educardmedia}
                      src={educationData[i].image}
                      title={educationData[i].institute}
                    />
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="h5" component="h2">
                      {educationData[i].institute}
                    </Typography>
                    
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={1}>
                      <Grid item>
                        <QualificationIcon color="primary" fontSize='small'/>
                      </Grid>
                      <Grid item>
                      <Typography variant="body1" color="textSecondary" component="p" align="left">
                        {educationData[i].qualification}
                      </Typography>
                      </Grid>
                    </Grid>

                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={1}>
                      <Grid item>
                        <YearIcon color="primary" fontSize='small'/>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" color="textSecondary" component="p" align="left">
                          {educationData[i].duration}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                
                </Grid>
                <br/>
                <Typography variant="body1" color="textSecondary" component="p" align="left">
                  {RenderDescription(educationData[i].description)}
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    }
      
    return (
      <Paper className={classes.contentpaper} elevation={0}>
        <Grid container spacing={3} direction='row' justify='center'>
          {education}
        </Grid>
      </Paper>

    );
  };

  const RenderTab_Work = () => {
    return (
      <Paper className={classes.contentpaper} elevation={0}>
      </Paper>
    );
  };

  const RenderTab_Contact = () => {
    return (
      <Paper className={classes.contentpaper} elevation={0}>
        <Typography gutterBottom variant="h5" component="h2">
          CONTACT ME
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align="left">
          Email: <Link href="mailto:RaynoldTanYX@gmail.com" target="_blank">RaynoldTanYX@gmail.com</Link> <br/>
          LinkedIn: <Link href="https://www.linkedin.com/in/raynoldtan/" target="_blank">https://www.linkedin.com/in/raynoldtan/</Link>
        </Typography>
      </Paper>
    );
  };


  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container 
        direction='column'
        justify='center'
        alignItems='center'
        width='100%'>
          <Grid item>
            {RenderHeader()}
          </Grid>
          <Grid item xs={12} sm={11} md={10}>
            <Paper elevation={3} className={classes.tabspaper} width='100%'>
              {RenderTabs()}
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
