import React from 'react'
import skills from './skills.module.css'




export default function Skills (props) {
    return (
        <div className={skills.container}>
            <h3>Skills</h3>
            <ul className={skills.mainSkills}>
            {props.mainSkillsItem.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
            <ul>
            {props.secondSkillsItem.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}