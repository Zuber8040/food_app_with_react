import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
    return (
        <div>
            <h1>This is react webseries</h1>
            <h2>This is about react</h2>
            <User />
            <UserClass name={"Zuber Ustad (class) "} location={"Navi Mumbai"} />
        </div>
    )
}

export default About