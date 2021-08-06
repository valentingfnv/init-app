import React, { useState } from "react";
import { editTitleActionCreator, addSkillsActionCreator } from "../../redux/profileReducer";
import MainButton from "../microCopmonents/MainButton";
import TextInput from "../microCopmonents/TextInput";
import styles from "./edit.module.css";


export default function Edit({ dispatch }) {
  const [open, setOpen] = useState(false);

  let inputName = React.createRef();
  let inputPost = React.createRef();
  let inputSkills = React.createRef();

  let saveData = () => {
    let newName = inputName.current.value;
    let newPost = inputPost.current.value;
    dispatch(editTitleActionCreator(newName, newPost));
    inputName.current.value = "";
    newPost = inputPost.current.value = "";
  };

  let addSkills = () => {
    let newSkills = inputSkills.current.value
    dispatch(addSkillsActionCreator(newSkills))
    inputSkills.current.value = ''

  }




  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h3>name and post</h3>
      </div>
      <div 
        className={
          !open ? styles.titleMain : styles.titleMain + " " + styles.open
        }
      >
        <TextInput refs={inputName} label="name" type="text" />
        <TextInput refs={inputPost} label="post" type="text" />
        <MainButton onClick={saveData} label="SAVE" />
      </div>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h3>skills</h3>
      </div>
      <div
        className={
          !open ? styles.titleMain : styles.titleMain + " " + styles.open
        }
      >
        <TextInput refs={inputSkills} label="skills" type="text" />
        <MainButton onClick={addSkills} label="ADD" />
      </div>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h3>contacts</h3>
      </div>
      <div className={
          !open ? styles.titleMain : styles.titleMain + " " + styles.open
        }>
        <TextInput label="phone" type="text" />
        <TextInput label="mail" type="text" />
        <TextInput label="telegram" type="text" />
        <TextInput label="facebook" type="text" />
      </div>

      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h3>job</h3>
      </div>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h3>projects</h3>
      </div>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h3>abaut</h3>
      </div>
    </div>
  );
}
