import React from 'react';

class UserClass extends React.Component {


    // whenever     class load its constructor called  
    // then render is ccalled then componentDidMount is called 
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 1,
        }
        console.log(this.props.name + 'Child Constructor')
    }

    componentDidMount() {
        console.log(this.props.name + "child Mount ")
    }
    render() {
        const { name, location } = this.props
        const { count, count2 } = this.state
        console.log(this.props.name + 'Child render');
        return (
            <div className="user-card">
                {/* <h1>Count is :{this.state.count}</h1>
                <h1>Count2 is :{this.state.count2}</h1> */}
                <h1>Count is :{count}</h1>
                <button onClick={() => {
                    // Never update the state variable 
                    this.setState({
                        count: count + 1,
                    });
                }} >Click to increase Counter</button>
                <h2> Name : {name}</h2>
                <h2> Location : {location}</h2>
                <h2> Contact : zuber_29</h2>
            </div>
        )
    }
}

export default UserClass;