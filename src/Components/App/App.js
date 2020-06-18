import React, { useState } from "react";
import logo from "../../logo.svg";
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
import TabPanel from "../TabPanel";
import { sizing } from '@material-ui/system';

//colors
import { teal, pink, grey } from "@material-ui/core/colors";

import SvgIcon from '@material-ui/core/SvgIcon';
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
//icons for contact
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactForm from "../ContactForm";
//constants
import { projectData, educationData, workData, contactData } from '../../Constants';

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    //minHeight: '100vh',
    width: "100%",
    height: "100%"
  },
  headerimage: {
    height: "15vh",
    padding: 10,
    //width: '200px'
  },
  tabspaper: {
    //width: "100%",
    backgroundColor: grey[900],
    justify: 'center',
  },
  contentpaper: {
    //width: '100%',
    minHeight: "70vh",
    justify: 'center',
    backgroundColor: grey[900],
  },
  projcard: {
    //maxWidth: 345,
    backgroundColor: grey[800],
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
    maxWidth: "6rem",
    maxHeight: '6rem',
    objectFit: "contain",
    //height: 100,
    //backgroundColor: 'white',
  },
  workcardmedia: {
    maxWidth: "6rem",
    maxHeight: '6rem',
    objectFit: "contain",
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
      <img src={require('../../images/header.png')} className={classes.headerimage} alt='Logo'/>
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

                <Grid container spacing={2} alignItems="flex-start">
                  <Grid item xs={2} md={1}>
                    <CardMedia
                      component="img"
                      className={classes.educardmedia}
                      src={educationData[i].image}
                      title={educationData[i].institute}
                    />
                  </Grid>
                  <Grid item xs={10} md={11}>
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
        <Grid container spacing={3} direction='row' justify='center' alignItems='flex-start'>
          {education}
        </Grid>
      </Paper>

    );
  };

  const RenderTab_Work = () => {
    let work = [];
    for (let i = 0; i < workData.length; i++) {
      work.push(
        <Grid item xs={12}>
          <Card className={classes.projcard} elevation={3}>
            <CardActionArea onClick={()=>window.open(workData[i].link,"_blank")}>
              <CardContent>

                <Grid container spacing={2} alignItems="flex-start">
                  <Grid item xs={2} md={1}>
                    <CardMedia
                      component="img"
                      className={classes.workcardmedia}
                      src={workData[i].image}
                      title={workData[i].company}
                    />
                  </Grid>
                  <Grid item xs={10} md={11}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {workData[i].company}
                    </Typography>
                    
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={1}>
                      <Grid item>
                        <QualificationIcon color="primary" fontSize='small'/>
                      </Grid>
                      <Grid item>
                      <Typography variant="body1" color="textSecondary" component="p" align="left">
                        {workData[i].role}
                      </Typography>
                      </Grid>
                    </Grid>

                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={1}>
                      <Grid item>
                        <YearIcon color="primary" fontSize='small'/>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" color="textSecondary" component="p" align="left">
                          {workData[i].duration}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                
                </Grid>
                <br/>
                <Typography variant="body1" color="textSecondary" component="p" align="left">
                  {RenderDescription(workData[i].description)}
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    }
      
    return (
      <Paper className={classes.contentpaper} elevation={0}>
        <Grid container spacing={3} direction='row' justify='center' alignItems='flex-start'>
          {work}
        </Grid>
      </Paper>

    );
  };

  const RenderTab_Contact = () => {
    let contacts = [];
    contacts.push(
      <Grid item xs={12}>
        <Card className={classes.projcard} elevation={3}>
          <CardActionArea>
            <CardContent>                
              <Grid container direction="column" justify="center" alignItems="center" wrap="nowrap" spacing={1}>
                <Grid item>
                  <SvgIcon color="primary" fontSize='large' component={MailIcon}/>
                </Grid>
                <Grid item>
                <Typography variant="body1" color="textSecondary" component="p" align="left">
                  {<ContactForm/>}
                </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      );
    contactData.map((item, index) => {
      contacts.push(
        <Grid item xs={12}>
          <Card className={classes.projcard} elevation={3}>
            <CardActionArea onClick={()=>window.open(item.link,"_blank")}>
              <CardContent>                
                <Grid container direction="column" justify="center" alignItems="center" wrap="nowrap" spacing={1}>
                  <Grid item>
                    <SvgIcon color="primary" fontSize='large' component={item.icon}/>
                  </Grid>
                  <Grid item>
                  <Typography variant="body1" color="textSecondary" component="p" align="left">
                    {item.text}
                  </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        );
    });


    return (
      <Paper className={classes.contentpaper} elevation={0}>
        <Grid container spacing={5} direction='row' justify='center'>
          {contacts}
        </Grid>
      </Paper>

    );
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
        direction='row'
        justify='center'
        alignItems='flex-start'>
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
