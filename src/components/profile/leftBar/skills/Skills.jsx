import React from "react";
import styles from "./skills.module.css";

export default function Skills({ mainSkillsItem, secondSkillsItem }) {
  return (
    <div className={styles.container}>
      <h3>Skills</h3>
      <ul className={styles.mainSkills}>
        {mainSkillsItem.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <ul>
        {secondSkillsItem.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
