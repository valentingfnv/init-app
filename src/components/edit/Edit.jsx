import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import styles from "./edit.module.css";

import NameEdit from './EditComponent/NameEdit'
import AvatarEdit from './EditComponent/AvatarEdit'
import SkillsEdit from './EditComponent/SkillsEdit'
import ContactsEdit from './EditComponent/ContactsEdit'
import JobEdit from './EditComponent/JobEdit'
import ProjectsEdit from './EditComponent/ProjectsEdit'
import AboutEdit from './EditComponent/AboutEdit'


export default function Edit({ addName, addSkills }) {


  // let inputName = React.createRef();
  // let inputPost = React.createRef();
  // let inputSkills = React.createRef();

  // let onAddName = () => {
  //   let newName = inputName.current.value;
  //   let newPost = inputPost.current.value;
  //   addName(newName, newPost);
  //   inputName.current.value = "";
  //   inputPost.current.value = "";
  // };

  // let onAddSkills = () => {
  //   let newSkills = inputSkills.current.value
  //   addSkills(newSkills)
  //   inputSkills.current.value = ''

  // }




  return (
    <div className={styles.container}>
      <div className={styles.links}>
      <NavLink to='/name' activeClassName={styles.active}>Name</NavLink>
      <NavLink to='/avatar' activeClassName={styles.active}>Avatar</NavLink>
      <NavLink to='/skills' activeClassName={styles.active}>Skills</NavLink>
      <NavLink to='/contact' activeClassName={styles.active}>Contacts</NavLink>
      <NavLink to='/job' activeClassName={styles.active}>Job</NavLink>
      <NavLink to='/project' activeClassName={styles.active}>Projects</NavLink>
      <NavLink to='/about' activeClassName={styles.active}>About</NavLink>
      </div>
      <div className={styles.content}>
          <Switch>
            <Route path='/name'>
              <NameEdit />
            </Route>
            <Route path='/avatar'>
              <AvatarEdit />
            </Route>
            <Route path='/skills'>
              <SkillsEdit />
            </Route>
            <Route path='/contact'>
              <ContactsEdit />
            </Route>
            <Route path='/job'>
              <JobEdit />
            </Route>
            <Route path='/project'>
              <ProjectsEdit />
            </Route>
            <Route path='/about'>
              <AboutEdit />
            </Route>
          </Switch>
        </div>      
    </div>
 
  );
}

 //   <div className={styles.container}>
  //     <div className={styles.title} onClick={() => setOpen(!open)}>
  //       <h3>name and post</h3>
  //     </div>
  //     <div 
  //       className={
  //         !open ? styles.titleMain : styles.titleMain + " " + styles.open
  //       }
  //     >
  //       <TextInput refs={inputName} label="name" type="text" />
  //       <TextInput refs={inputPost} label="post" type="text" />
  //       <MainButton onClick={onAddName} label="SAVE" />
  //     </div>
  //     <div className={styles.title} onClick={() => setOpen(!open)}>
  //       <h3>skills</h3>
  //     </div>
  //     <div
  //       className={
  //         !open ? styles.titleMain : styles.titleMain + " " + styles.open
  //       }
  //     >
  //       <TextInput refs={inputSkills} label="skills" type="text" />
  //       <MainButton onClick={onAddSkills} label="ADD" />
  //     </div>
  //     <div className={styles.title} onClick={() => setOpen(!open)}>
  //       <h3>contacts</h3>
  //     </div>
  //     <div className={
  //         !open ? styles.titleMain : styles.titleMain + " " + styles.open
  //       }>
  //       <TextInput label="phone" type="text" />
  //       <TextInput label="mail" type="text" />
  //       <TextInput label="telegram" type="text" />
  //       <TextInput label="facebook" type="text" />
  //     </div>

  //     <div className={styles.title} onClick={() => setOpen(!open)}>
  //       <h3>job</h3>
  //     </div>
  //     <div className={styles.title} onClick={() => setOpen(!open)}>
  //       <h3>projects</h3>
  //     </div>
  //     <div className={styles.title} onClick={() => setOpen(!open)}>
  //       <h3>abaut</h3>
  //     </div>
  //   </div>