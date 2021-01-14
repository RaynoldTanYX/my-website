import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ProjectIcon from "@material-ui/icons/Code";
import BlogIcon from "@material-ui/icons/Book";
import ContactIcon from "@material-ui/icons/ContactMail";

export const NavBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon/>,
        className: 'nav-text'
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <ProjectIcon/>,
        className: 'nav-text'
    },
    {
        title: 'Education',
        path: '/education',
        icon: <SchoolIcon/>,
        className: 'nav-text'
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <WorkIcon/>,
        className: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/posts',
        icon: <BlogIcon/>,
        className: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <ContactIcon/>,
        className: 'nav-text'
    },
]