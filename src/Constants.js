//icons for contactData
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

import ResumeLink from './files/resume.pdf'

export const projectData = [
  {
    title: "Personal Website",
    media: "https://raynoldtan.com/static/media/logo512.c11c05c6.png",
    mediaType: "img",
    year: "2020",
    language: "Javascript",
    tools: "ReactJS, Material-UI and NetlifyCMS",
    platform: "Web",
    description: [
      "Initially created during one of my internships to learn and practice ReactJS and MaterialUI during my free-time. Now, it is frequently updated to showcase my experience in the industry. ",
      "Hosted using Github Pages and using Cloudflare for the SSL certificate to maintain a low running cost.",
      "Blog section is implemented using NetlifyCMS to allow for easy creation and edits of posts."
    ],
    link: "https://raynoldtan.com",
  },
  {
    title: "Fitness App",
    media: "https://www.youtube.com/embed/FdgN4c3AtR4",
    mediaType: "iframe",
    year: "2020",
    language: "Java",
    tools: "Android Studio",
    platform: "Android",
    description: [
      "Fitness app that allows its users to view weather information (from data.gov.sg) in Singapore and view/edit crowd-sourced data such as location of fitness facilities anywhere in the world",
    ],
    link: "https://youtu.be/FdgN4c3AtR4",
  },
  {
    title: "Activation App",
    media: "https://www.youtube.com/embed/8AwZOFpQwSg",
    mediaType: "iframe",
    year: "2018",
    language: "Java",
    tools: "Android Studio",
    platform: "Android",
    description: [
      "Self-initiated mobile application idea with the intention to increase the response time of high readiness units in the army.",
      "User can add specific phone numbers to the whitelist within the app. Upon receiving a text from any of these numbers, the mobile phone will play an alarm sound, regardless of whether it is in silent mode.",
    ],
    link: "https://youtu.be/8AwZOFpQwSg",
  },
  {
    title: "Space Arena",
    media: "https://www.youtube.com/embed/IX0dHolltBo",
    mediaType: "iframe",
    year: "2016",
    language: "C#",
    tools: "Unity3D",
    platform: "Android",
    description: [
      "Mobile action game built using Unity3D and C# in 2016.",
      "Worked as the project lead, managing the team while being the sole-programmer.",
      "Also handled the outsourcing of audio production.",
    ],
    link: "https://youtu.be/IX0dHolltBo",
  },
  {
    title: "Cyber Evil Terminator",
    media: "https://www.youtube.com/embed/_Ivy0j2iYXQ",
    mediaType: "iframe",
    year: "2015",
    language: "C#",
    tools: "Unity3D",
    platform: "Android",
    description: [
      "Mobile educational game built using Unity3D and C# in 2015.",
      "Final Year Project 2 at NYP",
      "Achieved second place in the National Crime Prevention Council Mobile Game Design Contest",
      "Worked in a group of 3 programmers and 2 artists.",
      "Handled gameplay and UI programming.",
    ],
    link: "https://youtu.be/_Ivy0j2iYXQ",
  },
  {
    title: "Financial Assistance Grand Tourney",
    media: "https://www.youtube.com/embed/bICqhb2jjkI",
    mediaType: "iframe",
    year: "2015",
    language: "C#",
    tools: "Unity3D",
    platform: "Windows",
    description: [
      "Desktop cart racing game built using Unity3D and C# in 2015.",
      "Final Year Project while attaining my diploma.",
      "Worked in a group of 3 programmers and 2 artists.",
      "Handled gameplay, UI and AI programming.",
    ],
    link: "https://youtu.be/bICqhb2jjkI",
  },
];

export const educationData = [
  {
    institute: "Nanyang Technological University (NTU), Singapore",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nanyang_Technological_University_coat_of_arms_vector.svg/150px-Nanyang_Technological_University_coat_of_arms_vector.svg.png",
    qualification: "Bachelor of Engineering in Computer Science",
    duration: "Aug 2018 - Dec 2021 (expected)",
    description: [
      "Sub-Committee Member for the Photo-Videographic Society."
    ],
    link: "http://scse.ntu.edu.sg/Programmes/CurrentStudents/Undergraduate/Pages/CS.aspx",
  },
  {
    institute: "Nanyang Polytechnic (NYP), Singapore",
    image: "https://lh3.googleusercontent.com/proxy/x5xaZJJS12YRtPAfgduiQRPrOYGrR7HTN0hFcGBoOcjNKkgF5EAnKP0EjrIzJXiy8AHLejEAJQmy7LVF1BYtgYIBUJTY6PsrYFIa0AbpEV3VKpJTc5w",
    qualification: "Diploma in Digital Entertainment Technology (Games)",
    duration: "Apr 2013 - May 2016",
    description: [
      "Graduated with a GPA of 3.79.", 
      "Received Director's List awards for five semesters. ",
      "Went on an overseas internship at Kajaani University of Applied Sciences, Finland.",
      "First runner up in the National Crime Prevention Council Mobile Game Design Contest 2015.",
      "Certified with PlayStation Game Development Training.",
    ],
    link: "https://www.nyp.edu.sg/schools/sidm/full-time-courses/game-development-and-technology.html",
  },
];

export const workData = [
  {
    company: "Global eTrade Services",
    role: "Software Engineer (Fullstack) Intern",
    duration: "May 2020 - Aug 2020 (3 months)",
    //image: "https://globaletrade.services/themes/gets/logo.svg",
    description: [
      "Involved in the implementation and testing phases of DataTX, an artificial intelligence based software tool that allows the user to harness pre-existing information in digital and non-digital format to ease data entry.", 
      "Developed using JavaScript ,ReactJS and Axios for the front-end web application, and for the back-end using Java, Spring and MongoDB.",   
      "Created load testing scripts using Load Runner software."
    ],
    link: "https://globaletrade.services/"
  },
  {
    company: "Data Science and Artificial Intelligence Research (DSAIR) Lab @ NTU",
    role: "Part-time Student Assistant",
    duration: "Aug 2019 - Jan 2020 (6 months)",
    //image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nanyang_Technological_University_coat_of_arms_vector.svg/150px-Nanyang_Technological_University_coat_of_arms_vector.svg.png",
    description: [
      "Developed for IntelliK, a game authoring platform which enables creative people to develop artificial intelligence powered digital games without requiring any programming skills, using Unity3D with C#.",
      "In charge of porting the application to mobile operating systems.", 
      "Worked closely with a graphic designer to develop the entire mobile user interface."
    ],
    link: "https://dsair.ntu.edu.sg/Pages/Home.aspx"
  },
  {
    company: "Infinito Games",
    role: "Full-time Game Developer",
    duration: "Jun 2016 - Oct 2016 (5 months)",
    //image: "https://lh6.googleusercontent.com/CX5zExOrEIv_RI8DzK3nZsp9Ho_rxksEbPmejKPmpKI7ZwitzTYeTr1JHQwKTki9lgQMgxHAMscj835qED0LsWlze3F7B8CiGasYyFRrR95AgtBrzFA=w572",
    description: [
      "Developed games and interactive exhibits using Unity3D for multiple platforms.", 
      "Integrated Virtual and Augmented Reality devices into the applications.",
      "Led and supervised small teams to complete the projects.",
      "Managed the outsourcing of jobs such as audio creation."
    ],
    link: "https://www.infinitogames.com/"
  },
];

export const contactData = [
  {
    icon: DescriptionIcon,
    link: ResumeLink,
    text: "Resume",
  },
  {
    icon: MailIcon,
    link: "mailto:contact@raynoldtan.com", 
    text: "contact@raynoldtan.com",
  },
  {
    icon: LinkedInIcon,
    link: "linkedin.com/in/raynoldtan/",
    text: "linkedin.com/in/raynoldtan/",
  },
];

export const recaptchaKey = "6LcdwgEVAAAAAJc19Sj50r4akRu4ewLFFpbkkWll"; //only can be accessed by specific domains

export const contactFormLink = "https://submit-form.com/0uNfM4rkHczwkAioF-bDa";

export const DATA_GOV_SG_URL = "https://api.data.gov.sg";