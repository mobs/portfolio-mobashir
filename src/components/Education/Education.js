import React, { Fragment } from "react";

import EducationImg from "../asset/kindpng_2158189.png";
import EducationData from "../../Data/EducationData";
import Certifications from "../Certifications/Certifications";
import Degree from "./Degree";
import classes from "./education.module.css";
import { useSelector } from "react-redux";
import Card from "../UI/Card";

function Education(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);

    const work = EducationData.work;
    return (
        <Fragment>
            <div className={classes.educationHeader}>
                <div className={classes.eduImg}>
                    <img src={EducationImg} alt="" srcset="" />
                </div>
                <div className={classes.educationCard}>
                    <h2 style={{color:uiColor}}>Education & Work Experience</h2>
                    <h2 style={{ color: nonThemeColor }}>Experience </h2>
                    <Card className={classes.work} >
                        <div className={classes.workDetail}>
                            <h3 style={{ color: nonThemeColor }}>{work.startDate} - {work.endDate}</h3>
                            <h1 style={{ color: uiColor ,fontSize:'3rem'}}>{work.companyName}</h1>
                            <h3 style={{color:uiColor,fontSize:'2rem'}}> {work.jobTitle} 
                            <span style={{color:'white'}}> {work.subTaught} </span>
                            </h3>
                        </div>
                        <ul className={classes.details}>
                            <li>{work.desc}</li>
                        </ul>
                    </Card>
                </div>
            </div>
            <Degree />
            <Certifications />
        </Fragment>
    )
}
export default Education;