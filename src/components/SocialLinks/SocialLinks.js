import React from "react";

import SocialData from "../../Data/SocialData";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { SiLeetcode, SiCodechef } from "react-icons/si";

import classes from "./socialLinks.module.css";
import { useSelector } from "react-redux";
const SocialLinks = (props) => {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    return (
        <div className={`${classes.socialLinks} ${props.className}`} style={{color:nonThemeColor}}>
            <a href={SocialData.githubLink} > <GitHubIcon /></a>
            <a href={SocialData.linkedInLink} > <LinkedInIcon  /></a>
            <a href={SocialData.leetcodeLink} >  <SiLeetcode /> </a>
            <a href={SocialData.codecehfLink} >  <SiCodechef /></a>
            <a href={SocialData.emailLink}> <EmailIcon /></a>
        </div>
    )
};
export default SocialLinks;
