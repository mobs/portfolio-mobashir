import React from "react";
import { useSelector } from "react-redux";

import Button from "../UI/Button";
import classes from "./createCertificate.module.css"
import { Coursera } from "../asset/svg/svg";
import ThemeData from "../../Data/ThemeData";

const CreateCertificate = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);

    const activeMode=useSelector(state=>state.mode);
    let certBgColor;
    if(activeMode==='light'){
        certBgColor=ThemeData.certBgLight;
    }
    else{
        certBgColor=ThemeData.certBgDark;
    }
    let certImage;
    if(props.item.platform === 'Coursera'){
        certImage = <Coursera />;
    }
    if(props.item.platform === 'offline') {
        certImage = <h2 style={{color:'grey'}}> OFFLINE </h2>
    }
    return (
        <div className={classes.certificate} >
            <div className={classes.Overlay}>
                <div className={classes.overlayLink}>
                    <a href={props.item.link} id='overlay-text'>
                        <Button> View Certificate</Button>
                    </a>
                </div>
            </div>
            <div className={classes.certBody}>
                <div className={classes.certImage} style={{ color: nonThemeColor,backgroundColor:certBgColor}}>
                    {certImage}
                </div>
                <div className={classes.certInfo}>
                    <h2 style={{color:uiColor}}>{props.item.title}</h2>
                    <h3>INSTRUCTOR: {props.item.instructor}</h3>
                </div>
            </div>
        </div>
    )
}
export default CreateCertificate;
