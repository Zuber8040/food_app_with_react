import { useState } from "react";
import { LOGO_URL } from "../utiles/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utiles/useOnlineStatus";
const Headers = () => {
    const [loginBtn, setLoginBtn] = useState('Login');
    const oneStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg   ">
            <div className="w-40">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="food logo app"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online Status : {oneStatus ? "✅" : "🔴"}</li>
                    <li className="px-4" > <Link to='/'>Home</Link></li>
                    <li className="px-4" ><Link to='/about'>About Us</Link></li>
                    <li className="px-4" ><Link to='contact'>Contact Us</Link></li>
                    <li className="px-4" ><Link to='grocery'>Grocery</Link></li>
                    <li className="px-4" >Cart</li>
                    <button className="login_btn" onClick={
                        () => {
                            loginBtn === 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login')
                        }
                    }>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Headers;