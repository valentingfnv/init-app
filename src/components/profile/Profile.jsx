import React from 'react'
import profile from './profile.module.css'

import Avatar from './leftBar/avatar/Avatar'
import Skills from './leftBar/skills/Skills'
import Contacts from './leftBar/contacts/Contacts'

import Title from './rightBar/title/Title'
import LastJob from './rightBar/lastJob/LastJob'
import Projects from './rightBar/projects/Projects'
import About from './rightBar/about/About'

function Profile (props) {
    return (
        <div className={profile.container}>
            <div className={profile.leftBar}>
                <Avatar />
                <Skills mainSkillsItem={props.mainSkillsItem} secondSkillsItem={props.secondSkillsItem} />
                <Contacts contactsItem={props.contactsItem} />
            </div>
            <div className={profile.rightBar}>
                <Title />
                <LastJob />
                <Projects />
                <About />
            </div>
        </div>
    )
}

export default Profile