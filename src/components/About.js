import User from './User'
import UserClass from './UserClass'
import { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    componentDidMount() {
        console.log("Parent Component did Mount")
    }

    render() {
        console.log('parent render')
        return (
            <div>
                <h1>This is react webseries</h1>
                <h2>This is about react</h2>
                <UserClass name={"Zuber Ustad (class) "} location={"Navi Mumbai"} />

            </div>
        )
    }
}


export default About