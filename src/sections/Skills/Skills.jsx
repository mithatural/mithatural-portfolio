import React from "react";
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="AWS" />
           <SkillList src={checkMarkIcon} skill="React" />
           <SkillList src={checkMarkIcon} skill="JavaScript" />
           <SkillList src={checkMarkIcon} skill="Python" />
           <SkillList src={checkMarkIcon} skill="TypeScript" />
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="CSS" />
           <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
           <SkillList src={checkMarkIcon} skill="Bootstrap" />
           <SkillList src={checkMarkIcon} skill="SASS" />
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="HTML" />
           <SkillList src={checkMarkIcon} skill="BOTO3" />
           <SkillList src={checkMarkIcon} skill="Git" />
           <SkillList src={checkMarkIcon} skill="Github" />
           <SkillList src={checkMarkIcon} skill="ChatGPT" />
        </div>

    </section>
  );
    
}

export default Skills;
