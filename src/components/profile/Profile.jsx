import React from "react";
import styles from "./profile.module.css";

import Title from "./leftBar/title/Title";
import Avatar from "./leftBar/avatar/Avatar";
import Skills from "./leftBar/skills/Skills";
import Contacts from "./leftBar/contacts/Contacts";


import LastJob from "./rightBar/lastJob/LastJob";
import Projects from "./rightBar/projects/Projects";
import About from "./rightBar/about/About";

function Profile(props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftBar}>
        <Title title={props.title} />
        <Avatar />
        <Skills
          mainSkillsItem={props.mainSkillsItem}
          secondSkillsItem={props.secondSkillsItem}
        />
        <Contacts contactsItem={props.contactsItem} />
      </div>
      <div className={styles.rightBar}>
        <LastJob />
        <Projects />
        <About />
      </div>
    </div>
  );
}

export default Profile;
