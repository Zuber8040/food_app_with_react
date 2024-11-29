import { useState } from "react";

const User = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    return (
        <div className="user-card">

            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2> Name : Zuber Ustad </h2>
            <h2> Location : Kharghar</h2>
            <h2> Contact : zuber_29</h2>
        </div>
    )
}
export default User;