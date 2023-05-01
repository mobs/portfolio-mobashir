import classes from "./programmingSkills.module.css";
import { SiReact, SiJavascript, SiRedux, SiFirebase, SiHtml5, SiCss3, SiMui, SiMysql  } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { useSelector } from "react-redux";

const skills = [TbBrandCpp, SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiFirebase,  SiMui, SiMysql];
const ProgrammingSkills = (props) => {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.mainCard}>
            <h1 style={{color:nonThemeColor}}>Programming <span style={{ color:uiColor}}>SkillSet</span></h1>
            <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} key={index}>
                        <div className={classes.name}>React</div>
                        <Item />
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;