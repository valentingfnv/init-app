import React from 'react'
import skills from './skills.module.css'


let skillsItem = [
    {id:1 , name:'JavaScript'},
    {id:2 , name:'Python'},
    {id:3 , name:'HTML'},
    {id:4 , name:'CSS'}
    
]

export default function Skills () {
    return (
        <div className={skills.container}>
            <h3>Skills</h3>
            <ul className={skills.mainSkills}>
            {skillsItem.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}