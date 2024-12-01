import React from 'react';

class UserClass extends React.Component {


    // whenever     class load its constructor called  
    // then render is ccalled then componentDidMount is called 
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'Default'
            },
        };
    }

    async componentDidMount() {
        //   https://api.github.com/users/USERNAME
        const data = await fetch('https://api.github.com/users/Zuber8040');
        const json = await data.json();

        this.setState({
            userInfo: json
        });
    }
    render() {
        const { name, location, bio, avatar_url } = this.state.userInfo
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2> Name : {name}</h2>
                <h2> Location : {location}</h2>
                <h2> Contact : zuber_29</h2>
                <h2> Bio :{bio}</h2>
                <h2> Bio :{bio}</h2>
            </div>
        )
    }
}

export default UserClass;